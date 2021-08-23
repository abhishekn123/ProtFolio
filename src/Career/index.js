import { IconButton } from '@chakra-ui/button'
import { Box, Heading } from '@chakra-ui/layout'
import React from 'react'
import CarrerCard from './CarrerCard'

export default function Career() {
    return (
        <div>
            <Heading p="2" as="h3" size="lg" >Career  <IconButton  aria-label="Search database" icon={<CareerIcon fontSize="lg" />} />  </Heading>
            <Box>
                <CarrerCard />
            </Box>
        </div>
    )
}


function CareerIcon() {
    return <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="css-974dwi" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5V6.85L8.129 8.947a.5.5 0 01-.258 0L0 6.85v5.65z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v1.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 5.884V4.5zm5-2A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z" clip-rule="evenodd"></path></svg>
}