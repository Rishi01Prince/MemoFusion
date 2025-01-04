import axios from 'axios';

const backendUrl = 'http://localhost:5000/api/auth'; // Updated backend URL to localhost

export async function getCustomToken(email, password) {
  try {
    const response = await axios.post(`${backendUrl}/login`, {
      email,
      password,
    });

    if (response.data && response.data.authToken) {  // Use authToken instead of token
      return response.data.authToken;
    } else {
      throw new Error('Authentication failed');
    }
  } catch (error) {
    console.error('Error fetching custom token:', error);
    throw new Error('Authentication failed');
  }
}

export async function getUserDetails(token) {
  try {
    const response = await axios.get(`${backendUrl}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data && response.data.user) {
      return response.data.user;
    } else {
      throw new Error('Failed to fetch user details');
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw new Error('Failed to fetch user details');
  }
}
