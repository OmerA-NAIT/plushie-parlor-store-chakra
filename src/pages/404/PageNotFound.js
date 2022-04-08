import React from 'react';
import { Heading, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <Heading>Error 404 - Page Not Found.</Heading>
      <Link as={RouterLink} to="/dashboard">
        Return to safety.
      </Link>
    </>
  );
}

export default PageNotFound;
