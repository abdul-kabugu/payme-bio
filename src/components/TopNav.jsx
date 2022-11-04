import { Box, HStack, Container, Text, Button, Show, Avatar, Image} from '@chakra-ui/react'
import React from 'react'
import { useMoralis } from 'react-moralis'
import { Link } from 'react-router-dom'
import { truncateString } from '../hooks/useSubstring'


export default function TopNav() {
  const {authenticate, account, isAuthenticated, user} = useMoralis()
  
  return (
   <Box  display='flex' px={9} justifyContent='space-between' alignItems='center' h='60px'
      marginX='auto' borderBottom='1px' borderBottomColor='gray.200' pos='fixed' top={0} left={0} right={0}
   >
     
      {/*} <Text fontSize='xl' fontWeight='bold'>DebbleX</Text>*/}
         <Link to='/'> <Image src='/img/logo192.png'  /> </Link>
    
     

         {
          isAuthenticated ?  <Box border="1px solid" borderColor="gray.300" py={2} px={5} rounded="lg" display="flex" gap={6} alignItems="center" justifyContent='center'> 
              <Avatar  src='https://nftcoders.com/avatar/avatar-cool.svg' size="sm"  />
            <Text>{ truncateString( user?.attributes?.ethAddress, 9)}</Text> 
            </Box>
          :
        <Button variant='outline' onClick={authenticate}>connect  wallet</Button>
         }
   </Box>
  )
}
