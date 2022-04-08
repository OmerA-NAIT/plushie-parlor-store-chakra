import React from 'react';
import { Heading, HStack, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function AppBar(props) {
  return (
    <header>
      <HStack>
        <Heading>AppBar</Heading>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Text>Button 2</Text>
        <Link as={RouterLink} to="/">
          Sign Out
        </Link>
      </HStack>
    </header>
  );
}

export default AppBar;
