import { useToast, AlertIcon, Box, Button, Heading, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useMoralis } from 'react-moralis'
import {TfiShare} from 'react-icons/tfi'
import {CopyToClipboard} from 'react-copy-to-clipboard'
export default function DashBoardPortal() {
  const [isLinkCopied, setisLinkCopied] = useState(false)
    const { user, isAuthenticated} = useMoralis()
    const toast = useToast()
    if(! isAuthenticated){
      return(
        <Box w="full" h="100vh"  display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="xl" fontWeight="semibold">Your not authenticated please connect your wallet</Text>
        </Box>
      )
    }
  return (
<Box>
    <Box h="80vh" w={{base : "100%", md : "600px"}}  display="flex" flexDirection="column" justifyContent="center" alignItems="center">
    <HStack gap={10} my={5}>
    <Heading
     bgGradient='linear(to-l, #7928CA, #FF0080)'
     bgClip='text'
     fontSize='4xl'
     fontWeight='extrabold'
    >Hellow</Heading>
     <Text 
        bgGradient='linear(to-r, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='2xl'
        fontWeight='extrabold'
     >@{user?.attributes?.username}</Text>
    </HStack>

    <HStack gap={10} my={7}>
      <Text color="gray.600" fontWeight="bold">debble.xyz/{user?.attributes?.username}</Text>
      <CopyToClipboard text={`debble.xyz/${user?.attributes?.username}`}
        onCopy={() =>   
          toast({
            title: 'Link copied to clipboard',
            position:"top",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
    }
      >
      
       <Button rightIcon={<TfiShare />} colorScheme="twitter">Share</Button>
       </CopyToClipboard>
    </HStack>

     <Tabs>
      <TabList>
        <Tab>Active Links</Tab>
        <Tab>Invoices </Tab>
        <Tab>Transactions</Tab>

      </TabList>
      <TabPanels>
        <TabPanel>
          <Text fontSize="lg" color="gray.600"  >coming  soon ...</Text>
        </TabPanel>
        <TabPanel>
          <Text fontSize="lg" color="gray.600">coming soon ..</Text>
        </TabPanel>
        <TabPanel>
          <Text fontSize="lg" color="gray.600">coming soon .</Text>
        </TabPanel>
      </TabPanels>
     </Tabs>
    </Box>
   
</Box>
  )
}
