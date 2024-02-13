import { IconButton } from '@chakra-ui/button'
import { Box, HStack } from '@chakra-ui/layout'
import React from 'react';
import { FaLinkedin, FaPhoneSquareAlt, FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg"
import { GrInstagram } from "react-icons/gr"

export default function Footer() {
    return (
        <HStack spacing="24px" justifyContent="center" marginTop="20" >
            <Box w="40px" h="40px" >
                <a href="https://www.linkedin.com/in/abhishek-n-53b454178/" target="_blank" > <IconButton fontSize="lg" aria-label="Search database" icon={<FaLinkedin fontSize="lg" />} /></a>
            </Box>
            <Box w="40px" h="40px" >
                <a href="https://www.instagram.com/mr.abhishek_n/" target="_blank" > <IconButton fontSize="lg" aria-label="Search database" icon={<GrInstagram fontSize="lg" />} /></a>
            </Box>
            <Box w="40px" h="40px" >
                <a href="tel:8618872414" > <IconButton fontSize="lg" aria-label="Search database" icon={<FaPhoneSquareAlt fontSize="lg" />} /></a>
            </Box>
            <Box w="40px" h="40px">
                <a href = "mailto: abhishekn@outlook.in"> <IconButton fontSize="lg" aria-label="Search database" icon={<CgMail fontSize="lg" />} /></a>
            </Box>
        </HStack>
    )
}
