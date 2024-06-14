import { Box, Text, Container } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box>
        <Text fontSize="2xl" mb={4}>Portfolio</Text>
        <Text>Highlight previous projects to demonstrate expertise and creativity.</Text>
      </Box>
    </Container>
  );
};

export default Portfolio;