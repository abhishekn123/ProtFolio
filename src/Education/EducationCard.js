import { Image } from '@chakra-ui/image'
import { Badge, Box, Heading, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/layout'
import React from 'react';
import college from "../assets/college.png"

export default function EducationCard() {
    return (

        <Box w="full">
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }}  >
                <Box>  <HStack>
                    <Box>  <Image w="full" src={college} alt="IvyMobility" height="20"  /></Box>
                    <Box><Heading as="h6" size="md" >Sapthagiri College of Engineering</Heading>
                        <Heading as="h5" size="sm">
                            Bachelor's Degree in Electronica and Communication
                        </Heading>
                    </Box>
                </HStack>
                </Box>
                <Box justifySelf="end" >
                    <Text >2015-2019</Text>
                </Box>
            </SimpleGrid >
            <HStack p="2" w="full">
                <Stack direction="row">
                    <Badge>Web Development</Badge>
                    <Badge >Data Structures</Badge>
                </Stack>
            </HStack>
        </Box>

    )
}
