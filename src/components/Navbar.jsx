import { Box, Flex, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Online Presence Pro</Box>
        <Flex alignItems={"center"}>
          <RouterLink to="/">
            <Button variant={"link"} mr={4}>
              Home
            </Button>
          </RouterLink>
          <RouterLink to="/google-maps">
            <Button variant={"link"} mr={4}>
              Google Maps Integration
            </Button>
          </RouterLink>
          <RouterLink to="/website-creation">
            <Button variant={"link"} mr={4}>
              Website Creation
            </Button>
          </RouterLink>
          <RouterLink to="/logo-customization">
            <Button variant={"link"} mr={4}>
              Logo Customization
            </Button>
          </RouterLink>
          <RouterLink to="/testimonials">
            <Button variant={"link"} mr={4}>
              Testimonials
            </Button>
          </RouterLink>
          <RouterLink to="/portfolio">
            <Button variant={"link"} mr={4}>
              Portfolio
            </Button>
          </RouterLink>
          <RouterLink to="/blog">
            <Button variant={"link"} mr={4}>
              Blog
            </Button>
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;