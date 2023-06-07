import React from "react";
import {
  Container,
  Box,
  Text,
  TabPanels,
  Tabs,
  Tab,
  TabPanel,
  TabList,
} from "@chakra-ui/react";
import Login from "../components/Authentication.jsx/Login";
import Signup from "../components/Authentication.jsx/Signup";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent minH="100vh">
      <Box
        d="flex"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text
          fontSize="4xl"
          fontFamily="Work Sans"
          textAlign="center"
          fontWeight="bold"
          color="blue.500"
          textTransform="uppercase"
          letterSpacing="wide"
          position="relative"
          _after={{
            content: "''",
            position: "absolute",
            bottom: "-6px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "3px",
            borderRadius: "10px",
            background: "linear-gradient(to right, #00ffcc, #3366ff)",
          }}
          _before={{
            content: "''",
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "linear-gradient(to right, #00ffcc, #3366ff)",
            boxShadow: "0 0 10px #3366ff",
          }}
        >
          C<span style={{ color: "#FF007F" }}>O</span>DE V
          <span style={{ color: "#FF007F" }}>E</span>RSE
        </Text>
      </Box>

      <Box
        bg="white"
        w="100%"
        borderRadius="lg"
        p={4}
        borderWidth="1px"
        textColor="black"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1vm">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
