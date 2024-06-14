import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Online Presence Pro</Text>
        <Text>Your partner in establishing and expanding your online presence.</Text>
        <RouterLink to="/google-maps">
          <Button colorScheme="teal" size="lg">Get Started</Button>
        </RouterLink>
      </VStack>
    </Container>
  );
};

export default Index;