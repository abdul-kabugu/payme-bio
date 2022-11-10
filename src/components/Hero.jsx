import { Box, Heading, Flex, Text, Image, Avatar, Highlight, Button, HStack, Input, Select } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsLock, HiLockClosed } from 'react-icons/hi'
import { GrTwitter } from 'react-icons/gr'
import { BsFacebook } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Hero() {
  const [amount, setamount] = useState('')
  const [selectedCurrency, setselectedCurrency] = useState('')
  return (
    <Flex mt="150px" w='95vw'px={4} mx='auto' justify='space-between' alignItems={{base : 'center', lg : 'start'}} direction={{base : 'column-reverse', lg : 'row'}}  >
       <Box w={{base : '100%', md : '400px', lg : "500px"}} >
            <Avatar    src='img/smile-emoj.png'  mb='30px'  />
           <Heading
           bgGradient='linear(to-r, #44337A,  #FF0080)'
             bgClip='text'
             fontSize='4xl'
             fontWeight='extrabold'
           >
           The right way to make  cross-chain payments with Payment Links
           </Heading>
           <Text fontSize='2xl' color='gray.500' mt={4}>
            <Highlight query='Axelar network' styles={{ px: '2', py: '1', bg: 'purple.100', rounded : 'lg' }}>
             Paymee is your one-stop gateway for receiving
              and making cross-chain payments powered by the Axelar network
              </Highlight>
             </Text>

             <Button mt='20px' colorScheme='twitter' w={{base : '80%', md : '190px'}}>   <Link to='/dashboard'>Get started</Link> </Button>
       </Box>
       <Box w={{base : '100%', md : '400px', lg : "500px"}} mb={{base : '90px', lg : '0px'}} display='flex' alignItems='start' justifyContent={{base : 'start', lg : 'space-between'}} >
            <Image   src='/img/arrow.svg' w={{base : '20px', lg : '20px'}} mt='30px' color='purple.800'  />
           <Box bgGradient='linear(to-b, #FAF089, #FEFCBF, #6B46C1 )' w={{lg : '450px'}} h='100%' rounded='2xl' p={3} display='flex' justifyContent='center'>
              <Flex bg='white' w='250px' p={15} pos="absolute" top={0} rounded='lg'>
                <AiOutlineClose  size={22} style={{color : "red", marginRight:"7px"}}/>
                 <Text color='gray.600'>0x9AE6...554a4e4C8305</Text>
              </Flex>

               <Box w='300px' bg='white' h='370px'  mt={71} rounded='md' py={5} px={4}>
                <Flex alignItems='center'>
                  <HiLockClosed  style={{color : "gray", marginRight : "6px"}}/>
                  <Text color='gray.600'>payme.xyz/filip</Text>
                </Flex>

                  <Box pos='relative'>
                    <Box w='100%' h='100px' bgGradient='linear(to-r, green.200, pink.500)' rounded='sm'>
                     
                    </Box>
                    <Avatar   src='/img/filip.jpg' name='flip'  size='lg' pos='absolute' top={68} left='10px'/>
                    <HStack ml='100px' gap={5} mt='5px'>
                   <GrTwitter size={20} cursor='pointer' style={{color : '#1DA1F2'}}/>
                   <BsFacebook   size={20} cursor='pointer' style={{color : '#1DA1F2'}}/>
                   <BiWorld   size={20} cursor='pointer' style={{color : '#1DA1F2'}}/>
                    </HStack>
                  </Box>
                   <Box border='2px solid'  borderColor='gray.200' mt={5} >
                      <Text>
                      Web3 developer and node oparetor lets break the fiat economy together 
                      </Text>
                   </Box>

                   <Flex mt={7}>
                      <Input  value={amount} onChange = {e => setamount(e.target.value)} 
                        placeholder='Amount'
                      />
                         <Select value={selectedCurrency} onChange = {e => setselectedCurrency(e.target.value)}>
                           <option value='usdt'>USDT</option>
                           <option value='usdc'>USDC</option>
                           <option value='matic'>MATIC</option>
                           <option value='bnb'>BNB</option>
                         </Select>
                   </Flex>
                   <Button colorScheme='twitter' w='100%' mx='auto' mt='12px'>Pay Now</Button>
               </Box>
           </Box>
          
       </Box>
    </Flex>
  )
}
