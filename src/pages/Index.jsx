import { Box, Button, Container, Flex, Heading, Input, Radio, RadioGroup, Stack, Text, VStack, Image } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaUserPlus, FaSignInAlt, FaCalendarPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.lg">
      <VStack spacing={8} py={10}>
        <Heading>Welcome to Eventinder</Heading>
        <Text>Connect and participate in local events.</Text>

        <Flex direction={{ base: "column", md: "row" }} width="full" justify="center" spacing={4}>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid" mr={2}>
            Membership Login
          </Button>
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="gray" variant="outline" ml={2}>
            Browse as Guest
          </Button>
        </Flex>

        <Flex direction="column" width="full" mt={6}>
          <Heading size="md" mb={4}>
            Upcoming Events
          </Heading>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontSize="lg">Local Concert</Text>
              <Button colorScheme="pink" size="sm">
                Participate
              </Button>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" mt={2}>
              <Text fontSize="lg">Art Exhibition</Text>
              <Button colorScheme="pink" size="sm">
                Participate
              </Button>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" mt={2}>
              <Text fontSize="lg">Football Match</Text>
              <Button colorScheme="pink" size="sm">
                Participate
              </Button>
            </Flex>
          </Box>
        </Flex>

        <VStack spacing={6} width="full">
          <Button leftIcon={<FaUserPlus />} colorScheme="orange" variant="solid">
            Join an Existing Event
          </Button>
          <Button leftIcon={<FaCalendarPlus />} colorScheme="blue" variant="solid">
            Create a New Event
          </Button>
        </VStack>

        <Flex direction="column" width="full">
          <Heading size="md" mb={2}>
            Create Your Own Event
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
            <Input placeholder="Event Name" />
            <Input placeholder="Location" />
            <RadioGroup defaultValue="alone">
              <Stack direction="row">
                <Radio value="alone">Alone</Radio>
                <Radio value="1friend">+1</Radio>
                <Radio value="2friends">+2</Radio>
              </Stack>
            </RadioGroup>
            <Button colorScheme="green">Create Event</Button>
          </Stack>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
