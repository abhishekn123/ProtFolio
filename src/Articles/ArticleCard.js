import { Badge, Box, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { IconButton } from '@chakra-ui/button';
import { ExternalLinkIcon } from "@chakra-ui/icons";


export default function ArticleCard(data) {
  return (
    <VStack
      style={{ borderStyle: "solid", borderWidth: "1px", borderRadius: "8px" }}
      p="2"
      wrap={"wrap"}
    >
      <HStack w="full"  wrap={"wrap"} >
        <Box >
          <Heading  p="2" as="h5" size="md" >
            {data.title}
          </Heading>
        </Box>
        <Box style={{ textAlign:"right"}} >
          <IconButton
            onClick={() => window.open(data?.link??"")}
            textAlign="end"
            p="2"
            icon={<ExternalLinkIcon />}
          />{" "}
        </Box>
      </HStack>
      <HStack w="full" shouldWrapChildren={true} wrap={"wrap"}>
        {data.categories.map((exp, index) => (
          <Box key={index}>
            <Badge colorScheme="linkedin">{exp}</Badge>
          </Box>
        ))}
      </HStack>
      <Text w="full" p="1">
        {data.content
          .split("\n")[1]
          .replace("<p>", "")
          .replace("</p>", "")
          .replace(/<h([1-6])(.*?)<\/h([1-6])>/is, "")}
      </Text>
    </VStack>
  );
}
