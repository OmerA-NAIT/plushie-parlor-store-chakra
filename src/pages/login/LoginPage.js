import React from 'react';
import { Stack, Input, FormControl, FormLabel, Button } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

function LoginPage() {
  let navigate = useNavigate();

  function onHandleSubmit(event) {
    event.preventDefault();
    navigate('/dashboard');
  }

  return (
    <>
      <FormControl as={'form'} onSubmit={onHandleSubmit} isRequired>
        <FormLabel htmlFor="email">Email address:</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email..."
          required
        />
        <FormLabel htmlFor="password">Password:</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password..."
          required
        />
        <Button type="submit" colorScheme="pink" variant="solid">
          Sign In
        </Button>
      </FormControl>
    </>
  );
}

export default LoginPage;
