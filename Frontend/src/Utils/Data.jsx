import api from "./Axios";

const ContactInfo = {
    contact_phone: "+923029677678",
    contact_email: "zararanwar1234321@gmail.com",
    address: "Abbottabad Khyber Pakhtun Khowa",
    facebook: "https://facebook.com",
    twitter: "https://facebook.com",
    linkedin: "https://facebook.com",
    instagram: "https://facebook.com",
    youtube: "https://facebook.com",
}


const server_ip = 'http://localhost:800'


 const fetchUsers = async () => {
    try {
        const response = await api.get("/users/");
        return response.data; // Return the data from the API response
    } catch (error) {
        console.error('Error fetching doctors:', error);
        throw error; // Re-throw the error for further handling
    }
};

// Function to fetch all appointments
export const fetchAppointments = async () => {
    try {
        const response = await api.get("/appointments/");
        return response.data; // Return the data from the API response
    } catch (error) {
        console.error('Error fetching appointments:', error);
        throw error; // Re-throw the error for further handling
    }
};



export { ContactInfo, server_ip,fetchUsers}