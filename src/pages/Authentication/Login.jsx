import React from 'react'
import { Box, Card, TextField } from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          padding: 2,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </Card>
    </Box>
  )
}

export default Login;