import { Image } from '@chakra-ui/image'
import { Badge, Box, Heading, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/layout'
import React from 'react';
import Az900 from "../assets/Az-900.png"

export default function CertificationCard() {
    return (

        <Box w="full">
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }}  >
                <Box>  <HStack>
                    <Box>  <Image w="full" src={Az900} alt="IvyMobility" height="20"  /></Box>
                    <Box><Heading as="h6" size="md" > Microsoft Certified: Azure Fundamentals</Heading>
                        <Heading as="h5" size="sm">
                         ID: C1E99F9A3D04FB77
                        </Heading>
                    </Box>
                </HStack>
                </Box>
                <Box justifySelf="end" >
                    <Text >12/02/2024</Text>
                </Box>
            </SimpleGrid >
            <HStack p="2" w="full">
                <Stack direction="row">
                    <Badge>Architecture</Badge>
                    <Badge >Services</Badge>
                    <Badge >Management</Badge>
                    <Badge >Governance</Badge>
                </Stack>
            </HStack>
        </Box>

    )
}
