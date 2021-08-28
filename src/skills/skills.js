import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import "./skills.css";

export default function Skills() {
  return (
    <div>
      <Heading p="2" as="h3" size="lg">
        Skills
      </Heading>
      <Box className="skillssection" p="3">
        <Heading p="1" as="h5" size="sm">
          Javascript, Reactjs, Angular, ReactNative{" "}
        </Heading>
        <Heading p="1" as="h5" size="sm">
          NodeJs, DotnetCore
        </Heading>
        <Heading p="1" as="h5" size="sm">
          MySQL, PostgreSQL, Redis
        </Heading>
        <Heading p="1" as="h5" size="sm">
          Firebase, Heroku, Amazon Web Services
        </Heading>
      </Box>
    </div>
  );
}
