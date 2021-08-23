import { Image } from '@chakra-ui/image'
import { Badge, Box, Heading, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import ivy from "../assets/ivy.png"

export default function CarrerCard() {
    return (
        <Box w="full">
            <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }}  >
                <Box>  <HStack>
                    <Box>
                        <Image src={ivy} alt="IvyMobility" height="20" />
                    </Box>
                    <Box >
                        <Heading as="h6" size="md" >IvyMobility Solutions</Heading>
                        <Heading as="h5" size="sm">Software Engineer</Heading>
                    </Box>
                </HStack>
                </Box>
                <Box justifySelf="end" >
                    <Text >2020-Present</Text>
                </Box>
            </SimpleGrid >
            <HStack p="2" >
                <Stack direction="row"  shouldWrapChildren={true} wrap={"wrap"} >
                    <Badge>Reactjs</Badge>
                    <Badge >Angular</Badge>
                    <Badge >DotnetCore</Badge>
                    <Badge >NoSql</Badge>
                </Stack>
            </HStack>
        </Box>
    )
}
