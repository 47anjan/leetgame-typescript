import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import Navbar from "../components/Navbar";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box marginLeft={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesnot exist."
            : "Unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};
export default ErrorPage;
