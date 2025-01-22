import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend API
    axios.get('http://localhost:3000/api/message') // Backend URL
      .then((response) => {
        setMessage(response.data.message); // Update state with the response message
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>React + Nest.js Integration</h1>
      <p>Message from Backend: {message}</p>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Click Me
      </Button>
    </div>
  );
};

export default App;
