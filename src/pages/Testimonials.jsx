import { Box, Text, Container } from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box>
        <Text fontSize="2xl" mb={4}>Testimonials</Text>
        <Text>Client feedback and success stories to build credibility.</Text>
      </Box>
    </Container>
  );
};

export default Testimonials;