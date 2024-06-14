import { Box, Text, Container } from "@chakra-ui/react";

const Blog = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Box>
        <Text fontSize="2xl" mb={4}>Blog</Text>
        <Text>Share industry insights, tips, and updates to engage visitors and boost SEO.</Text>
      </Box>
    </Container>
  );
};

export default Blog;