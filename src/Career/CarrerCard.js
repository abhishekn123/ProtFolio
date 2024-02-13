import { Image } from "@chakra-ui/image";
import {
  Badge,
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import ivy from "../assets/ivy.png";
import concentrix from "../assets/concentrix.jfif";
import deloitte from "../assets/1662120927694.jpeg"

export default function CarrerCard() {
  const career = [
    {
      logo: ivy,
      name: "IvyMobility Solutions",
      role: "Software Engineer",
      date: "2020-2021",
      skills: ["Reactjs", "Angular", "DotnetCore", "NoSql"],
    },
    {
      logo: concentrix,
      name: "Concentrix Catalyst",
      role: "Software Engineer",
      date: "2021-2023",
      skills: ["Angular", "DotnetCore", "Sqlserver","Azure"],
    },
    {
      logo: deloitte,
      name: "Deloitte",
      role: "Senior Analyst",
      date: "2023-Present",
      skills: ["Reactjs", "DotnetCore", "Sqlserver","Docker","Azure"],
    },
  ];
  return (
    <>
      {career.reverse().map((exp) => (
        <Box w="full" marginTop="1" >
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }}>
            <Box>
              {" "}
              <HStack>
                <Box>
                  <Image src={exp.logo} alt={exp.name} height="20" />
                </Box>
                <Box>
                  <Heading as="h6" size="md">
                    {exp.name}
                  </Heading>
                  <Heading as="h5" size="sm">
                    {exp.role}
                  </Heading>
                </Box>
              </HStack>
            </Box>
            <Box justifySelf="end">
              <Text>{exp.date}</Text>
            </Box>
          </SimpleGrid>
          <HStack p="2">
            <Stack direction="row" shouldWrapChildren={true} wrap={"wrap"}>
              {exp.skills.map((skill) => (
                <Badge>{skill}</Badge>
              ))}
            </Stack>
          </HStack>
        </Box>
      ))}
    </>
  );
}
