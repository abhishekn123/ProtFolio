import { Box, Spacer, VStack } from '@chakra-ui/layout'
import React from 'react'
import Career from '../Career'
import Education from '../Education'
import Profile from '../profile/Profile'
import Skills from '../skills/skills'
import Certification from '../Certification'

export default function AboutPage() {
    return (
        <VStack
            spacing={5}
            align="stretch"
        >
            <Box> <Profile /></Box>
            <Box >   <Skills /></Box>
            <Box  > <Career /></Box>
            <Box><Certification/></Box>
            <Box  > <Education /></Box>
        </VStack>
    )
}
