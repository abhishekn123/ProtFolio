import { Box, Heading, Text } from '@chakra-ui/layout'
import { SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton';
import React, { useEffect, useState } from 'react'
import OpenSourceCard from './openSourceCard'

export default function OpenSource() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/abhishekn123/repos").then(data => data.json()).then(data => setData(data));
    }, [])
    let skeleton = [1, 2, 3, 4, 5]
    return (
        <div>
            {data.length > 0 ? <> <Heading marginTop="8" as="h3" size="lg">Open Source</Heading>
                <Text paddingBottom="20px" >This page lists some of the open source repositories I have published or contributed to.</Text>
                {data.map(exp => exp?.description ? <Box p="3" > <OpenSourceCard {...exp} /></Box> : null)} </> : skeleton.map(exp => <><SkeletonCircle size="10" marginTop={"4"} />
                    <SkeletonText mt="4" noOfLines={4} spacing="4" /></>)}

        </div>
    )
}
