import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Stack, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="rgba(255, 255, 255, 0.8)" color="gray.800" borderBottom="1px" borderColor="gray.200">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            TechSolutions
          </Heading>
        </Flex>

        <Stack direction={{ base: "column", md: "row" }} display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }}>
          <Text>Services</Text>
          <Text>Projects</Text>
          <Text>About</Text>
          <Text>Contact</Text>
        </Stack>

        <Box display={{ base: "none", md: "block" }}>
          <Button variant="outline" _hover={{ bg: "gray.700", borderColor: "gray.700" }}>
            Login
          </Button>
        </Box>
      </Flex>

      {/* Hero */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Rapidly build modern websites without ever leaving your HTML.
        </Heading>
        <Text color={"gray.500"} mb={6}>
          A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>

      {/* Features */}
      <Box p={4}>
        <Stack spacing={4} as={SimpleGrid} columns={{ base: 1, md: 3 }}>
          <Box bg="white" p={6} rounded="md" shadow="md">
            <Heading as="h3" size="lg" mb={2}>
              Responsive Design
            </Heading>
            <Text fontSize="xl">Tailwind CSS makes it easy to build responsive interfaces without any annoying side effects.</Text>
          </Box>

          <Box bg="white" p={6} rounded="md" shadow="md">
            <Heading as="h3" size="lg" mb={2}>
              Component-Friendly
            </Heading>
            <Text fontSize="xl">Tailwind CSS provides low-level utility classes that let you build completely custom designs without leaving your HTML.</Text>
          </Box>

          <Box bg="white" p={6} rounded="md" shadow="md">
            <Heading as="h3" size="lg" mb={2}>
              Developer Experience
            </Heading>
            <Text fontSize="xl">Tailwind CSS is designed with your happiness in mind. The ease of performing changes is refreshing.</Text>
          </Box>
        </Stack>
      </Box>

      {/* CTA Section */}
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Ready to dive in?
        </Heading>
        <Text color={"gray.500"} mb={6}>
          Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={6} px={4} textAlign="center">
        <Text mb={4}>&copy; {new Date().getFullYear()} Tailwind CSS. All rights reserved.</Text>
        <Stack direction="row" spacing={6} justify="center">
          <Icon as={FaTwitter} />
          <Icon as={FaGithub} />
          <Icon as={FaEnvelope} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
