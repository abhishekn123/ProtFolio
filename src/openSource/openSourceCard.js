import { IconButton } from '@chakra-ui/button'
import { Badge, Box, Heading, HStack, SimpleGrid, Text } from '@chakra-ui/layout'
import React from 'react'

export default function OpenSourceCard(data) {
 
    return (
        <SimpleGrid>
            <Box>
                <HStack>
                    <Box> <Heading  as="h6" size="md" ><IconButton icon={<BookIcon />} />{data.name}</Heading></Box>
                    <Box style={{marginLeft:"auto"}} ><IconButton onClick={()=>window.open(data.homepage)} textAlign="end"  p="2" icon={<ShareIcon />} /> <IconButton onClick={()=>window.open(data.git_url)} textAlign="end"   p="2" icon={<GithubIcon/>} /></Box>
                </HStack>
                <Text p="2" >{data.description}</Text>
                <HStack>
                    <Badge>{data.language}</Badge>
                </HStack>
            </Box>
        </SimpleGrid>
    )
}

function BookIcon() {
    return <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="css-bfygty" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M19,2.01H6c-1.206,0-3,0.799-3,3v3v6v3v2c0,2.201,1.794,3,3,3h15v-2H6.012C5.55,19.998,5,19.815,5,19.01 c0-0.101,0.009-0.191,0.024-0.273c0.112-0.575,0.583-0.717,0.987-0.727H20c0.018,0,0.031-0.009,0.049-0.01H21v-0.99V15V4.01 C21,2.907,20.103,2.01,19,2.01z M19,16.01H5v-2v-6v-3c0-0.806,0.55-0.988,1-1h7v7l2-1l2,1v-7h2V15V16.01z"></path></svg>
}
function ShareIcon() {
    return <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="css-bfygty" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
}
function GithubIcon() {
    return <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="css-1ffjuzl" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
}