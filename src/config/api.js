// API Configuration for different environments
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-railway-app-url.railway.app' // Replace with your actual Railway URL
  : 'http://localhost:5000'; // Development URL

export default API_BASE_URL;
