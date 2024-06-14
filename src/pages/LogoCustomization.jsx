import { Box, Text, Container } from "@chakra-ui/react";

const LogoCustomization = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box>
        <Text fontSize="2xl" mb={4}>Logo Customization</Text>
        <Text>We offer personalized logo design services to establish a strong brand identity, fostering recognition and trust among target audiences.</Text>
      </Box>
    </Container>
  );
};

export default LogoCustomization;