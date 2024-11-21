
// api.js

// Function for user registration (you may already have this)
export const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('User registered successfully', data);
        return data; // Return the server response (for token, etc.)
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData);
        throw new Error(errorData.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  };
  
  // Function for user login
  export const loginUser = async (loginData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        return data; // Return the token and any other relevant data
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData);
        throw new Error(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  
