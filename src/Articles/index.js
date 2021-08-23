import { Box, Heading } from '@chakra-ui/layout'
import { SkeletonCircle, SkeletonText } from '@chakra-ui/skeleton';
import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'

export default function Articles() {
    const [data, setdata] = useState([]);
    useEffect(() => { fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@abhisheknabhi").then(data => data.json()).then(data => setdata(data.items)); }, [])
    let skeleton = [1, 2, 3, 4, 5]
    return (
        <>
            {data.length <= 0 ? skeleton.map(exp => <><SkeletonCircle size="10" marginTop={"4"} />
                <SkeletonText mt="4" noOfLines={4} spacing="4" /></>) : <>  <Heading marginTop="8" as="h3" size="lg" marginBottom="5" >Featured Articles</Heading>
                {data.map((exp, index) => <Box marginBottom="5" key={index} ><ArticleCard  {...exp} /></Box>)} </>}
        </>
    )
}
