import React from 'react';
import { Box, List, ListItem, VStack } from '@chakra-ui/react';

function SideBar(props) {
  return (
    <Box>
      <VStack>
        <List>
          <ListItem>Dashboard</ListItem>
          <ListItem>Vendors</ListItem>
          <ListItem>Users</ListItem>
          <ListItem>Categories</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Orders</ListItem>
          <ListItem>Reviews</ListItem>
          <ListItem>Brands</ListItem>
          <ListItem>Authentication</ListItem>
          <ListItem>Icons</ListItem>
          <ListItem>Other Pages</ListItem>
        </List>
      </VStack>
    </Box>
  );
}

export default SideBar;
