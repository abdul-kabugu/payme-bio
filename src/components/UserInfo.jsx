import { Avatar, Box, Heading, Input, Textarea,Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useMoralis } from 'react-moralis'

export default function UserInfo() {
    const {user} = useMoralis()
    console.log(user)
  return (
    <Box w={{base : "100%", md: "500px"}} ml={{base : "0px", lg : "200px"}} 
      display="flex" flexDirection="column" alignItems="center" p={5}
    >
       <Avatar    src='https://nftcoders.com/avatar/avatar-cool.svg'   size='2xl' />
       <Box w="100%" my={4}>
       <Text my={1} textTransform="capitalize" fontWeight='bold'>user name</Text>
         <Input    isReadOnly  value={user?.attributes?.username}  textTransform="capitalize" fontSize="lg"  color="gray.500" fontWeight="bold"   border="1px solid" borderColor="gray.700"/>
         </Box>
         
          <Box w="100%" my={4}>
          <Text my={1} textTransform="capitalize" fontWeight='bold'>BIO</Text>
         <Textarea       isReadOnly  value={user?.attributes?.userInfo}       border="1px solid" borderColor="gray.700"  />
         </Box>
         <Box w="100%" my={4}>
       <Text my={1} textTransform="capitalize" fontWeight='bold'>websiite link</Text>
         <Input    isReadOnly  value={user?.attributes?.websiteLink}  textTransform="capitalize" fontSize="lg"  color="gray.500" fontWeight="bold"   border="1px solid" borderColor="gray.700"/>
         </Box>
         <Box w="100%" my={4}>
       <Text my={1} textTransform="capitalize" fontWeight='bold'>twitter link</Text>
         <Input    isReadOnly  value={user?.attributes?.twtterAccount}  textTransform="capitalize" fontSize="lg"  color="gray.500" fontWeight="bold"   border="1px solid" borderColor="gray.700"/>
         </Box>
         <Box w="100%" my={4}>
       <Text my={1} textTransform="capitalize" fontWeight='bold'>whatSapp Link</Text>
         <Input    isReadOnly  value={user?.attributes?.whatsAppLink}  textTransform="capitalize" fontSize="lg"  color="gray.500" fontWeight="bold"   border="1px solid" borderColor="gray.700"/>
         </Box>
         <Box w="100%" my={4}>
       <Text my={1} textTransform="capitalize" fontWeight='bold'>wallet adddress</Text>
         <Input    isReadOnly  value={user?.attributes?.accountAddress}  textTransform="capitalize" fontSize="lg"  color="gray.500" fontWeight="bold"   border="1px solid" borderColor="gray.700"/>
         </Box>
         <Box w="100%" my={4}>
         <Text my={1} textTransform="capitalize" fontWeight='bold'>selected chain</Text>
         <Input    isReadOnly  value={user?.attributes?.selectedChain}  textTransform="capitalize" fontSize="lg"  color="gray.500" fontWeight="bold"   border="1px solid" borderColor="gray.700"/>
         </Box>
       <Button colorScheme="twitter" w="100%">Save</Button>

    </Box>
  )
}
