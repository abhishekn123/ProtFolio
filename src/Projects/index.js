import { Image } from '@chakra-ui/image'
import { Badge, Box, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/layout'
import React from 'react';
import project from "../assets/Project-1.png"
import digitalgemba from "../assets/DigitalGemba.png"

export default function Projects() {
    return (
        <>
        <Box w="full" marginTop="8">
            <Heading p="2" as="h5" size="md">Breacup</Heading>
            <SimpleGrid columns={{sm:1,md:1,lg:2}} spacing={10}>
                <Box  >
                    <Image src={project} />
                </Box>
                <Box >
                    <Text>
                        Breacup is a tool which solve all labor law compliance and get salary breakup with one click for free. Get Blue-collar minimum wages, statutory compliance, leave wages, bonus details, Labor welfare fund, PF, ESI details to create a quotation for your customer or offer letter for your employee with 100% complaint as per Government governance.
                        <HStack p="2"  shouldWrapChildren={true} wrap={"wrap"} >
                            <Badge>Angular</Badge>
                            <Badge>Javascript</Badge>
                            <Badge>Firebase</Badge>
                        </HStack>
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        <Box w="full" marginTop="8">
            <Heading p="2" as="h5" size="md">Digital Gemba</Heading>
            <SimpleGrid columns={{sm:1,md:1,lg:2}} spacing={10}>
                <Box  >
                    <Image src={digitalgemba} />
                </Box>
                <Box >
                    <Text>
                    Manage your products (BOM) with heararcnial  structure. Manage BOM for multiple customers. Attach drawing to each part with easy access to team.The Product management module form the base of the application.
                        <HStack p="2"  shouldWrapChildren={true} wrap={"wrap"} >
                            <Badge>React JS</Badge>
                            <Badge>Express JS</Badge>
                            <Badge>MySql</Badge>
                        </HStack>
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
        </>
    )
}
