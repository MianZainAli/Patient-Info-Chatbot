import whisper
import torch
import requests
from gtts import gTTS
from fpdf import FPDF
import os
import tempfile
import json
import base64



# Keep the Whisper model for transcription
def load_whisper_model():
    return whisper.load_model("base") 


def transcribe_audio(audio_file_name):
    try:
        model = whisper.load_model("base")
        result = model.transcribe(audio_file_name)
        return result['text']
    except Exception as e:
        print(f"Error transcribing audio: {e}")
        return ""
    
def text_to_audio(text, filename="response.mp3"):
    try:
        tts = gTTS(text=text)
        tts.save(filename)
        return filename
    except Exception as e:
        print(f"Error generating audio: {e}")
        return None


# Handle audio conversations with the chatbot
def process_audio_message(audio_file):
    """Process audio input and return audio response"""
    try:
        # Transcribe the audio to text
        transcription = transcribe_audio(audio_file)
        if not transcription:
            return None, "Could not understand audio. Please try again."
        
        # Get text response from chatbot
        response = chatbot_response(transcription)
        
        # Convert response back to audio
        audio_file = text_to_audio(response)
        
        return transcription, response, audio_file
    except Exception as e:
        print(f"Error processing audio message: {e}")
        return None, "Error processing audio request", None


# Hugging Face API Implementation
class InferenceAPIChain:
    def __init__(self, api_token):
        self.api_token = api_token
        self.api_url = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2"
        self.headers = {"Authorization": f"Bearer {api_token}"}

    def getPromptFromTemplate(self):

        system_prompt = """
        Role: You are a medical assistant chatbot designed to gather a patient's initial data before they consult with a doctor...
        """
        
        B_INST, E_INST = "[INST]", "[/INST]"
        B_SYS, E_SYS = "<<SYS>>\n", "\n<</SYS>>\n\n"
        
        return B_INST, E_INST, B_SYS, E_SYS, system_prompt

    def format_prompt(self, question, history_text=""):
        B_INST, E_INST, B_SYS, E_SYS, system_prompt = self.getPromptFromTemplate()
        SYSTEM_PROMPT = B_SYS + system_prompt + E_SYS
        
        formatted_prompt = f"{B_INST}{SYSTEM_PROMPT}History: {history_text}\n\nUser: {question}{E_INST}"
        return formatted_prompt

    def clean_response(self, response):
        # Your existing response cleaning code
        if isinstance(response, list) and len(response) > 0:
            response_text = response[0].get("generated_text", "")
        elif isinstance(response, dict):
            response_text = response.get("generated_text", "")
        else:
            response_text = str(response)
        
        # Clean up instruction format if present
        if "[/INST]" in response_text:
            response_text = response_text.split("[/INST]")[-1]
        
        # Remove tags and prefixes
        response_text = response_text.replace("AI:", "").replace("Assistant:", "").strip()
        
        # Truncate at any user prompts
        cut_indicators = ["Human:", "human:", "User:", "user:"]
        for indicator in cut_indicators:
            if indicator in response_text:
                response_text = response_text.split(indicator)[0]
        
        return response_text.strip()

    def get_response(self, question, history_text=""):
        formatted_prompt = self.format_prompt(question, history_text)
        
        payload = {
            "inputs": formatted_prompt,
            "parameters": {
                "max_new_tokens": 500,
                "temperature": 0.7,
                "top_k": 30,
                "do_sample": True
            }
        }
        
        try:
            response = requests.post(self.api_url, headers=self.headers, json=payload)
            
            if response.status_code == 200:
                return self.clean_response(response.json())
            else:
                print(f"API error: {response.status_code}")
                print(f"Response: {response.text}")
                return f"Sorry, I encountered an error (Status code: {response.status_code}). Please try again later."
        
        except Exception as e:
            print(f"Exception during API call: {e}")
            return "Sorry, I'm having trouble connecting to my language processing service right now."

    def query_huggingface(self, prompt):
        """
        Query the Hugging Face model with a prompt.
        """
        try:
            # Use environment variable instead of hardcoded token
            api_token = os.environ.get("HUGGINGFACE_API_TOKEN")
            
            if not api_token:
                logger.error("HUGGINGFACE_API_TOKEN environment variable not set")
                return "I'm having trouble connecting to my knowledge base. Please try again later."
                
            # Rest of your existing code using api_token instead of the hardcoded value
            headers = {"Authorization": f"Bearer {api_token}"}
            # ...existing code...
        except Exception as e:
            logger.error(f"Error querying Hugging Face: {str(e)}")
            return "I encountered an error processing your request."


def generate_pdf(conversation):
    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=12)
    pdf.cell(200, 10, txt="Healthcare Initial Report", ln=True, align="C")
    pdf.ln(10)
    for message in conversation:
        role = "User" if message["role"] == "user" else "Assistant"
        pdf.multi_cell(0, 10, f"{role}: {message['content']}")
        pdf.ln(2)
    pdf_path = "healthcare_initial_report.pdf"
    pdf.output(pdf_path)
    return pdf_path


HUGGINGFACE_API_TOKEN = "your_huggingface_api_token_here"  # Replace with your actual token

whisper_model = load_whisper_model()
api_chain = InferenceAPIChain(HUGGINGFACE_API_TOKEN)

user_histories = {}

def chatbot_response(user_input, user_id=None):
    if not user_input.strip():
        return "Please enter a valid input."
    
    try:
        # Use a default user_id if none is provided
        if user_id is None or user_id == "":
            user_id = "default_user"
            
        if user_id not in user_histories:
            user_histories[user_id] = []
        
        history = user_histories[user_id]
        
        if user_input not in [msg["content"] for msg in history if msg["role"] == "user"]:
            history.append({"role": "user", "content": user_input})
        
        history_text = ""
        for msg in history[-6:-1]: 
            prefix = "User: " if msg["role"] == "user" else "Assistant: "
            history_text += prefix + msg["content"] + "\n"
        
        response = api_chain.get_response(user_input, history_text)
        
        history.append({"role": "assistant", "content": response})
        
        return response
            
    except Exception as e:
        print(f"Error generating response: {e}")
        return "Sorry, I encountered an error while processing your request."