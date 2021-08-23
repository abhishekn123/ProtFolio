
import { Badge, Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'

export default function ArticleCard(data) {
    return (
        <VStack style={{ borderStyle: "solid", borderWidth: "1px", borderRadius: "8px" }} p="2"  >
            <Heading w="full" p="2" as="h5" size="md">{data.title}</Heading>
            <HStack  w="full" shouldWrapChildren={true} wrap={"wrap"} >
                {data.categories.map((exp, index) => <Box key={index} ><Badge colorScheme="linkedin"  >{exp}</Badge></Box>)}
            </HStack>
            <Text w="full" p="1" >
                {data.content.split('\n')[1].replace("<p>", "").replace("</p>", "").replace(/<h([1-6])(.*?)<\/h([1-6])>/si,"")}
            </Text>
        </VStack>

    )
}
