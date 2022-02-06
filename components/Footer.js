import { Box } from '@chakra-ui/layout';

const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © {new Date().getFullYear()} Realtor, Inc.
  </Box>
);

export default Footer;