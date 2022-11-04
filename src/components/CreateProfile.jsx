import { Avatar, Box, FormControl, FormLabel, Heading, Text, Flex, Input, InputGroup, InputLeftAddon, Textarea, Select, Button } from '@chakra-ui/react'
import React, { useState, useRef } from 'react'
import { AiOutlineCloudUpload, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { TiWorld } from 'react-icons/ti'
import {useMoralis, useNewMoralisObject, useMoralisQuery} from 'react-moralis'
export default function CreateProfile() {
    const [userName, setuserName] = useState('')
    const [bio, setbio] = useState('')
     const [ethAddress, setethAddress] = useState('')
     const [twitterLink, settwitterLink] = useState('')
     const [websiteLink, setwebsiteLink] = useState('')
     const [whatspLink, setWhatspLink] = useState('')
     const [selectedChain, setselectedChain] = useState('Polygon')
     const [selectedPicture, setselectedPicture] = useState('')
      
      const {save, error, isSaving} = useNewMoralisObject("profileLinks")
       const {data : profiles, isLoading : isProfilesLoading, error : isProfilesError}  = useMoralisQuery('profileLinks')
       const itExists = profiles.some(element => element.attributes.username === userName)
        
          const handleSelectFile = () => {
              avatarRef.current.click()
          }
      const avatarRef = useRef()
       const {account, setUserData, userError, isUserUpdating, user} = useMoralis()

         const profileInfo = {
            username : userName,
            userInfo : bio,
            selectedChain : selectedChain,
             accountAddress : user?.attributes?.ethAddress,
            twitterAccount  : twitterLink,
             websiteLink : websiteLink,
             whatsAppLink : whatspLink,

         }

         const handleProfileSave = async () => {
           await save(profileInfo)
            await setUserData(profileInfo)
              
           }
         
  return (
   <Box  w={{base : '100%', lg : "500px"}} ml={{lg : '100px'}} p={5}position='relative'>
     <Box>
       <Box bgGradient='linear(to-l, green.200, pink.500)' w='100%' h='120px' rounded='lg' >

       </Box>
     <Avatar  src='https://nftcoders.com/avatar/avatar-cool.svg'  name='User'  size='xl'  pos='absolute' top='91px' left='30px' />
       <Flex alignItems='center' justify='end'>
        <input    type='file' ref={avatarRef} onChange = {e => setselectedPicture(e.target.files[0])} hidden/>
          <AiOutlineCloudUpload  size={23} style={{marginRight:'5px'}} cursor='pointer' onClick={handleSelectFile}/>
            <Text>{selectedPicture.name}</Text>
          </Flex>
     </Box>
    
          <Box my='5px'>
            <Text color='gray.600' my={4} mt='50px'>Display name</Text>
        <InputGroup display='flex' flexDirection='column'>
        <InputLeftAddon children='debble.xyz/'  />
           <Input   value={userName}  onChange = {e =>  setuserName(e.target.value)} placeholder = 'User Name' colorScheme='gray'  border='1px solid' borderColor='gray.500' rounded='lg' />
            {itExists  &&  <Text fontSize='xs' color='red.500'>this name is not  available</Text>}
        </InputGroup>
        </Box>
        <Box>
          <Text  color='gray.600' my={4}>Your Bio</Text>
        <Textarea value={bio} onChange = {e => setbio(e.target.value)} placeholder='Your Bio' border='1px solid' borderColor='gray.500' rounded='lg' >
         </Textarea>
        </Box> 
        <Text  color='gray.600' my={4}>The chain of your choice</Text>
            <Flex my={4}>
             <FormControl >
               <Input  value={ ethAddress } onChange = {e => setethAddress(e.target.value)}  border='1px solid' borderColor='gray.400' placeholder='user address' />
             </FormControl>
             <Select value={selectedChain} onChange = {e => setselectedChain(e.target.value)}>
               <option value='ethereum-2'>Ethereum</option>
               <option value='binance'>BNB Chain</option>
               <option value='Polygon'>Polygon</option>
               <option value='Fantom'>Fantom</option>
           
             </Select>
          
            </Flex>
          <Box>
          <Text  color='gray.600' my={4}>Social Links</Text>
          <InputGroup>
        <InputLeftAddon children={<AiOutlineTwitter size={30} color='#1A8DD9'/>}  />
           <Input   value={twitterLink}  onChange = {e =>  settwitterLink(e.target.value)} placeholder = 'Twitter Link' colorScheme='gray'  border='1px solid' borderColor='gray.500' rounded='lg' />
       
        </InputGroup>
        <InputGroup my={4}>
        <InputLeftAddon children={<TiWorld size={30} color='#1A8DD9'/>}  />
           <Input   value={websiteLink}  onChange = {e =>  setwebsiteLink(e.target.value)} placeholder = 'Website link' colorScheme='gray'  border='1px solid' borderColor='gray.500' rounded='lg' />
        </InputGroup>

        <InputGroup my={4}>
        <InputLeftAddon children={<AiOutlineWhatsApp size={30} color='green'/>}  />
           <Input   value={whatspLink}  onChange = {e =>  setWhatspLink(e.target.value)} placeholder = 'WhatSapp link' colorScheme='gray'  border='1px solid' borderColor='gray.500' rounded='lg' />
        </InputGroup>
      
          </Box>

          <Button colorScheme='twitter' w='100%' ml='auto' onClick={() => handleProfileSave()} isDisabled={isSaving || itExists || isUserUpdating}>Save</Button>
   </Box>
  )
}
