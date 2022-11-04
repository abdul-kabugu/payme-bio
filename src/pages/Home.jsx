import { Box, Container, Text, Show, Hide, List, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { useMoralisQuery, useMoralis, useNewMoralisObject } from 'react-moralis'
import { Hero, TopNav } from '../components'
import {Link} from 'react-router-dom'
export default function Home() {
 const {data, isLoading, error} = useMoralisQuery('profileLinks')
  
  return (
   <Box >
    <TopNav  />
    <Hero  />
    {/*}
     <Box border='1px solid purple'>

        {data?.map((item, i) => {

          return(
            <Box key={i} border='1px solid yellow'>
              <Text>{item.id}</Text>
              <Text>{item.attributes?.accountAddress}</Text>
              <Text>{item.attributes?.selectedChain}</Text>
              <Text>{item.attributes?.twitterAccount}</Text>
              <Text>{item.attributes?.websiteLink}</Text>
             <Link to={`/${item?.attributes?.username}`}><Text>{item.attributes?.username}</Text></Link> 
            </Box>
          )
        })}
      </Box>*/}
   </Box>
  )
}
