import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, Spacer, Text, VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import Theme from '../Theme'
import "./navbar.css";
import logo from "../assets/logo.png";
import { useMediaQuery } from '@chakra-ui/media-query';
import { IconButton } from '@chakra-ui/button';
import history from '../Router/history';
import { useColorMode } from '@chakra-ui/color-mode';

export default function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
    return (
        <> {isLargerThan600 ? <Flex>
            < Box >
                <Avatar size="lg" name="Dan Abrahmov" src={logo} />
            </Box >
            <Box p="4" >
                <Text style={{ cursor: "pointer" }} className="selected-nav" onClick={() => history.push("/")}>About</Text>
            </Box>
            <Box p="4" >
                <Text style={{ cursor: "pointer" }} onClick={() => history.push("/Articles")} >Articles</Text>
            </Box>
            <Box p="4" >
                <Text style={{ cursor: "pointer" }} onClick={() => history.push("/OpenSource")} >Open Source</Text>
            </Box>
            <Box p="4">
                <Text style={{ cursor: "pointer" }}  onClick={() => history.push("/Projects")} >Projects</Text>
            </Box>
            <Spacer />
            <Box p="4" >
                <Theme toggleColorMode={toggleColorMode} />
            </Box>
        </Flex > : <SmallNav  toggleColorMode={toggleColorMode} />
        }</>

    )
}

function SmallNav({ toggleColorMode=()=>{}}) {
    const [selected, setSelected] = useState(false);
    return <> <Flex color="white">
        < Box >
            <Avatar size="lg" name="Dan Abrahmov" src={logo} />
        </Box >
        <Spacer />
        <Box p="4" >
            <Theme toggleColorMode={toggleColorMode} />
        </Box>
        <Box p="4">
            <IconButton onClick={() => setSelected(!selected)} icon={<Hamburgmenu />} />
        </Box>
    </Flex >
        {selected ? <VStack>
            <Box w="full" >
                <Text style={{ cursor: "pointer" }} className="selected-nav"  onClick={() => history.push("/")} >About</Text>
            </Box>
            <Box w="full" >
                <Text style={{ cursor: "pointer" }}  onClick={() => history.push("/Articles")} >Articles</Text>
            </Box>
            <Box w="full" >
                <Text style={{ cursor: "pointer" }}  onClick={() => history.push("/OpenSource")} >Open Source</Text>
            </Box>
            <Box w="full" >
                <Text style={{ cursor: "pointer" }} onClick={() => history.push("/Projects")} >Projects</Text>
            </Box>
        </VStack> : null}
    </>
}
function Hamburgmenu() {
    return <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" font-size="2.5rem" color="#000" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"  ><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
}