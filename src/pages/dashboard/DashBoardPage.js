import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { AppBar } from '../../components/appbar';
import Panels from '../../components/panels/Panels';
import SideBar from '../../components/sidebar/SideBar';

function DashBoardPage() {
  return (
    <>
      <AppBar />
      <SideBar />
      <Panels />
    </>
  );
}

export default DashBoardPage;
