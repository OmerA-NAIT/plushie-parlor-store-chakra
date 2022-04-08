import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

import { Routes, Route } from 'react-router-dom';

import { LoginPage, DashBoardPage, PageNotFound } from './pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;

// Template + experiment stuff from first build
// function App() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Box textAlign="center" fontSize="xl">
//         <Grid minH="100vh" p={3}>
//           <ColorModeSwitcher justifySelf="flex-end" />
//           <VStack spacing={8}>
//             <Logo h="40vmin" pointerEvents="none" />
//             <Text>
//               Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
//             </Text>
//             <Link
//               color="teal.500"
//               href="https://chakra-ui.com"
//               fontSize="2xl"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Learn Chakra
//             </Link>
//             <Heading>Heading.</Heading>
//             <Text fontSize="md">Medium Text Test.</Text>
//             <Text fontSize="sm">Small Text Test.</Text>
//           </VStack>
//         </Grid>
//       </Box>
//     </ChakraProvider>
//   );
// }
