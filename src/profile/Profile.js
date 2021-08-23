import { Image } from '@chakra-ui/image'
import { Heading, Text } from '@chakra-ui/layout'
import React from 'react';
import flag from "../assets/india.png"

export default function Profile() {
    return (
        <div style={{ marginTop: "30px" }}>
            <Heading p="2" as="h3" size="lg">Hi, I'm Abhishek</Heading>
            <Text p="2" >I am a Full Stack developer, an open source lover and a writer from India<Image display="inline" p="2" src={flag} /></Text>
            <Text p="2" >This is my digital garden, where I write about the things I'm working on and share what I've learned.</Text>
        </div>
    )
}
