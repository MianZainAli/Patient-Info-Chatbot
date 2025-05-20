import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Card, Spinner, Modal } from 'react-bootstrap';
import { FaMicrophone, FaStop, FaDownload, FaFilePdf, FaPlay } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import './Chat.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { 
      type: 'assistant', 
      content: "Hello! I am your medical assistant. I'm here to gather your health information before your doctor consultation. How can I help you today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [userId, setUserId] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const chatEndRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Generate or retrieve user ID
    const storedUserId = localStorage.getItem('medical_chat_user_id');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      const newUserId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('medical_chat_user_id', newUserId);
      setUserId(newUserId);
    }
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = async (messageContent, messageType = 'text') => {
    if (!messageContent.trim()) return;

    const tempMessageId = Date.now();
    // For audio, we'll show a processing message initially
    const initialContent = messageType === 'audio' ? "Processing your audio..." : messageContent;

    // Add temporary user message to chat
    setMessages(prev => [...prev, { 
      id: tempMessageId, 
      type: 'user', 
      content: initialContent,
      isProcessing: messageType === 'audio'
    }]);
    
    setInput('');
    setIsLoading(true);

    try {
      let dataToSend = messageContent;
      
      // If it's audio data from the recorder, extract the base64 part
      if (messageType === 'audio' && messageContent.startsWith('data:')) {
        dataToSend = messageContent.split(',')[1]; // Remove the data URL prefix
      }
      
      const response = await axios.post('http://127.0.0.1:8000/chatbot/', {
        message: dataToSend,
        message_type: messageType,
        user_id: userId  // Include user ID with each request
      });

      // For audio messages, update the placeholder with the transcription
      if (messageType === 'audio' && response.data.transcription) {
        // Update the user message with the actual transcription
        setMessages(prev => prev.map(msg => 
          msg.id === tempMessageId ? 
            { ...msg, content: response.data.transcription, isProcessing: false } : 
            msg
        ));
      }

      // Extract text response from the backend
      const botResponse = response.data.text_response || response.data.response || "I received your message";
                          
      // Add the bot response
      setMessages(prev => [...prev, { 
        type: 'assistant', 
        content: botResponse 
      }]);
    } catch (error) {
      console.error('Error sending message to chatbot:', error);
      
      // Update the placeholder message if it was an audio message
      if (messageType === 'audio') {
        setMessages(prev => prev.map(msg => 
          msg.id === tempMessageId ? { ...msg, content: "Failed to process audio", isProcessing: false } : msg
        ));
      }
      
      setMessages(prev => [...prev, { 
        type: 'assistant', 
        content: "I'm sorry, I encountered an error. Please try again." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        
        // Convert blob to base64 data URL
        const reader = new FileReader();
        reader.onloadend = () => {
          // The reader.result contains the complete data URL
          // We'll send this as is, and handle the extraction in sendMessage
          sendMessage(reader.result, 'audio');
        };
        reader.readAsDataURL(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Error accessing microphone. Please check your browser permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const generatePDF = async () => {
    setIsLoading(true);
    try {
      // Format conversation history for the PDF generation
      const conversationData = messages.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));
      
      const response = await axios.post(
        'http://127.0.0.1:8000/chatbot/generate-pdf/', 
        { 
          conversation: conversationData,
          user_id: userId  // Include user ID for PDF generation
        },
        { responseType: 'blob' }
      );
      
      // Create a blob URL from the PDF response
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url);
      setShowPdfModal(true);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF report. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadPDF = () => {
    if (!pdfUrl) return;
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'healthcare_initial_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPdfModal(false);
  };

  const playMessageAudio = (audioBase64) => {
    if (audioRef.current && audioBase64) {
      const audioData = `data:audio/mp3;base64,${audioBase64}`;
      audioRef.current.src = audioData;
      audioRef.current.play();
    }
  };

  return (
    <div className="d-flex col">
      <div className="content-container">
        <Container fluid >
          <Row className="justify-content-center">
              <Card className="chat-card shadow">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">Medical Assistant</h4>
                  <Button 
                    variant="outline-primary" 
                    onClick={generatePDF}
                    disabled={isLoading || messages.length <= 1}
                  >
                    {isLoading ? (
                      <Spinner as="span" animation="border" size="sm" />
                    ) : (
                      <>
                        <FaFilePdf className="me-2" />
                        Generate Report
                      </>
                    )}
                  </Button>
                </Card.Header>
                <Card.Body className="chat-body">
                  <div className="messages-container">
                    {messages.map((message, index) => (
                      <div
                        key={message.id || index}
                        className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
                      >
                        <div className="message-bubble">
                          {message.isProcessing ? (
                            <div className="d-flex align-items-center">
                              <p>{message.content}</p>
                              <Spinner animation="border" size="sm" className="ms-2" />
                            </div>
                          ) : (
                            <p>{message.content}</p>
                          )}
                          {message.audio && (
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="p-0 ms-2"
                              onClick={() => playMessageAudio(message.audio)}
                            >
                              <FaPlay />
                            </Button>
                          )}
                        </div>
                        <div className="message-info">
                          {message.type === 'user' ? 'You' : 'Assistant'}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="message bot-message">
                        <div className="message-bubble">
                          <Spinner animation="grow" variant="primary" size="sm" />
                          <Spinner animation="grow" variant="primary" size="sm" className="mx-2" />
                          <Spinner animation="grow" variant="primary" size="sm" />
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                </Card.Body>
                <Card.Footer className="chat-footer">
                  <Form onSubmit={handleSubmit}>
                    <div className="d-flex">
                      <Button
                        variant={isRecording ? "danger" : "outline-secondary"}
                        className="me-2"
                        onClick={isRecording ? stopRecording : startRecording}
                        disabled={isLoading}
                      >
                        {isRecording ? <FaStop /> : <FaMicrophone />}
                      </Button>
                      <Form.Control
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                        disabled={isRecording || isLoading}
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        className="ms-2"
                        disabled={!input.trim() || isRecording || isLoading}
                      >
                        <MdSend />
                      </Button>
                    </div>
                  </Form>
                </Card.Footer>
              </Card>
          </Row>
        </Container>
        
        <audio ref={audioRef} style={{ display: 'none' }} />
        
        <Modal show={showPdfModal} onHide={() => setShowPdfModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Medical Report Generated</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <FaFilePdf size={50} className="text-danger mb-3" />
            <p>Your medical report has been generated successfully.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowPdfModal(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={downloadPDF}>
              <FaDownload className="me-2" />
              Download Report
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ChatBot;
