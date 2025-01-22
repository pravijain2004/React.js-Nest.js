import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, CardContent, Typography, Paper } from '@mui/material';

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
    <Paper
      style={{
        padding: '20px',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" gutterBottom>
        React + Nest.js Integration
      </Typography>
      
      <Card
        style={{
          maxWidth: '400px',
          margin: '20px auto',
          padding: '20px',
          textAlign: 'center',
        }}
        elevation={3}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Message from Backend:
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {message || 'Loading...'}
          </Typography>
        </CardContent>
      </Card>

      <Button 
        variant="contained" 
        color="primary" 
        style={{ marginTop: '20px' }}
      >
        Click Me
      </Button>
    </Paper>
  );
};

export default App;
