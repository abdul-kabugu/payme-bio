import { Avatar, Box, Button, Center, Flex, useToast, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Select, Spinner, Text, IconButton } from '@chakra-ui/react'
import React, {useState} from 'react'
import { AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import { TiWorld } from 'react-icons/ti'
import { useMoralis, useMoralisQuery } from 'react-moralis'
import {useParams} from 'react-router-dom'
import {AxelarAssetTransfer, AxelarQueryAPI}  from '@axelar-network/axelarjs-sdk'
import { FiCheckCircle } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'
export default function Payme() {
  const {userId } = useParams()
   
  const [isPayModal, setisPayModal] = useState(false)
const [selectedPaymentCurrency, setselectedPaymentCurrency] = useState('BNB')
    const [sourceChain, setsourceChain] = useState('Polygon')
    const [tokenAmount, settokenAmount] = useState('')
    const [generetedAddress, setgeneretedAddress] = useState('')
     const [isGeneretingAddress, setisGeneretingAddress] = useState(false)
     const [isTokensSent, setisTokensSent] = useState(false)
     const [sendTokensResult, setsendTokensResult] = useState()
     const {Moralis} = useMoralis()
     const  toggleBNBModal = () =>  {
        isPayModal  ?  setisPayModal (false) : setisPayModal(true)
        setselectedPaymentCurrency('wbnb-wei')
     }
     const  togglePolygonModal = () =>  {
      isPayModal  ?  setisPayModal (false) : setisPayModal(true)
      setselectedPaymentCurrency('wmatic-wei')
   }
     const  toast =  useToast()
   const  toggleFantomModal = () =>  {
    isPayModal  ?  setisPayModal (false) : setisPayModal(true)
    setselectedPaymentCurrency('wftm-wei')
 }

 const  toggleUsdcModal = () =>  {
  isPayModal  ?  setisPayModal (false) : setisPayModal(true)
  setselectedPaymentCurrency('uausdc')
}


  const closePayModal = () =>  {
    setisPayModal(false)
  }

   
       const getModalBanner = () => {
           if(selectedPaymentCurrency === "wbnb-wei"){
            return(
              <Box bg='yellow.100' rounded='lg' p={5} w='100%' display='flex' alignItems='center' justifyContent='center'  h='100px'>
                <HStack gap={4}>
                  <Avatar  src='/img/binance.svg'  name='bnb'  />
                   <Text fontSize='2xl' fontWeight='bold' color='yellow.600'>BNB</Text>
                </HStack>
              </Box>
           )} else if(selectedPaymentCurrency === "wmatic-wei"){
            return(
            <Box bg='purple.200' w='100%' h='100px' rounded='lg' display='flex' alignItems='center' justifyContent='center' p={3}>
            <HStack gap={4}>
                  <Avatar  src='/img/polygon.svg'  name='polygon' size='sm' />
                   <Text fontSize='2xl' fontWeight='bold' color='purple.900'>MATIC</Text>
                </HStack>
          </Box>
           )}else if(selectedPaymentCurrency  === 'uausdc'){
             return(
              <Box bg='#DAE8F6' w='100%' h='100px' rounded='lg' display='flex' alignItems='center' justifyContent='center' p={3}>
            <HStack gap={3}>
                  <Avatar  src='/img/usdc.png'  name='usdc' size='sm' />
                   <Text fontSize='2xl' fontWeight='bold' color='blue.500'>USDC</Text>
                </HStack>
          </Box>
             )
           }

           else if(selectedPaymentCurrency  === 'wftm-wei'){
            return(
             <Box bg='cyan.100' w='100%' h='100px' rounded='lg' display='flex' alignItems='center' justifyContent='center' p={3}>
           <HStack gap={3}>
                 <Avatar  src='/img/fantom.svg'  name='polygon' size='sm' />
                  <Text fontSize='2xl' fontWeight='bold' color='cyan.400'>FANTOM</Text>
               </HStack>
         </Box>
            )
          }
       }

         const {data, isLoading, error} = useMoralisQuery("profileLinks", query => query.equalTo("username", userId))
          const USER_DATA = data[0]?.attributes
         console.log("the console from usePrams",  USER_DATA)

         const  handleOpenTwitter = () =>  {
          window.open(USER_DATA?.twitterAccount)
        }
        const  handleOpenWhatsapp = () =>  {
          window.open(USER_DATA?.whatsAppLink)
        }
        const  handleOpenWebsite = () =>  {
          window.open(USER_DATA?.websiteLink)
        }
          console.log(USER_DATA)
           const toChain =  USER_DATA?.selectedChain
        const api = new AxelarAssetTransfer({ environment: 'testnet' });
         const generateDepositAddress = async () => {
            setisGeneretingAddress(true)
         const  depositAddress = await api.getDepositAddress(sourceChain, toChain, USER_DATA?.accountAddress, selectedPaymentCurrency);
            setisGeneretingAddress(false)
             console.log("this is generated address ", depositAddress)
             return depositAddress
         }

      
             // I  LEFT  HERE  I'M  CREATING  A  CONDITION  STATEMENT  TO  GET  PROPER  ADDRESS BASED ON CURRENCY  CHAIN

            const  getTokenAddress = () =>  {
               if(selectedPaymentCurrency  === "wmatic-wei"  &&  sourceChain === 'Polygon'){
                return "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"
               }else if(selectedPaymentCurrency === "wmatic-wei" && sourceChain === "Fantom"){
                return "0x3C12d813bb36295A8361C4740A732Bb700df6Db0"
               }else if(selectedPaymentCurrency === "wmatic-wei" && sourceChain === 'binance'){
                return "0x920fA0DbB65cE928C29103AeC7B5c188bbea2f24"
               }
              else if(selectedPaymentCurrency === "uausdc" && sourceChain === 'binance'){
                return "0xc2fA98faB811B785b81c64Ac875b31CC9E40F9D2"
               }

               if(selectedPaymentCurrency  === "wftm-wei"  &&  sourceChain === 'Fantom'){
                return "0x812666209b90344Ec8e528375298ab9045c2Bd08"
               }else if(selectedPaymentCurrency === "wftm-wei" && sourceChain === "Polygon"){
                return "0x62b6F2A4eE6a4801bfcD2056d19c6d71654D2582"
               }else if(selectedPaymentCurrency === "wftm-wei" && sourceChain === 'binance'){
                return "0x90dEcD89a744a0CFbB3cc8DE08A5f3B14875B6C4"
               }
               else if(selectedPaymentCurrency === "uausdc" && sourceChain === 'Fantom'){
                return "0x75Cc4fDf1ee3E781C1A3Ee9151D5c6Ce34Cf5C61"
               }
               if(selectedPaymentCurrency  === "wbnb-wei"  &&  sourceChain === 'Polygon'){
                return "0x55fDE07dEF3261a41fC59B783D27A6357e8A86Df"
               }else if(selectedPaymentCurrency === "wbnb-wei" && sourceChain === "Fantom"){
                return "0x8DA729FC44366eFE36d522B865FeC34653e85F6e"
               }else if(selectedPaymentCurrency === "wbnb-wei" && sourceChain === 'binance'){
                return "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd"
               }
               else if(selectedPaymentCurrency === "uausdc" && sourceChain === 'Polygon'){
                return "0x2c852e740B62308c46DD29B982FBb650D063Bd07"
               }
            }

               const  tokenDecimal = () =>  {
                if(selectedPaymentCurrency === "uausdc"){
                  return "6"
                }else {
                  return '18'
                }
               }

                const  handleSendMore = () => {
                    setisTokensSent(false)
                    settokenAmount("")
                }
    
            const  handleSendTokens = async () => {
                  try{
                const  txAddress = await generateDepositAddress()
                  
                   
                 console.log("the tx  address", txAddress)
                 let options = {
                  type : 'erc20',
                  amount : Moralis.Units.Token(tokenAmount, tokenDecimal()),
                  receiver: txAddress,
                  contractAddress :  getTokenAddress()                    //"0x812666209b90344Ec8e528375298ab9045c2Bd08"
                }
               await Moralis.enableWeb3()
               let result = await Moralis.transfer(options);
               setisTokensSent(true)
                setsendTokensResult(result)
              /// console.log("the token  result  ", result)
            }catch (error) {
              toast({
                title : "Something  went  wrong",
                  description : "make sure you have enough balance  and  you selected correct  chain in your wallet",
                  status : 'error',
                  position : 'bottom-right',
                  duration: 9000,
                    isClosable: true,
              })
            }
          } 

            const handleOpenAxelerScan = () => {
              window.open(`https://testnet.axelarscan.io/address/${sendTokensResult?.from}`)
            }

           console.log("the send tokens result", sendTokensResult)
  return (
     <Box>
          <Modal isOpen={isPayModal} onClose = {closePayModal} isCentered>
             <ModalOverlay   bg='blackAlpha.700'/>
             <ModalContent>
              
                 <ModalBody>
                   

                   {!isTokensSent && getModalBanner()}
                   
                    {isTokensSent  && <Box display='flex' flexDirection='column' alignItems='center' justifyContent="center">
                       <FiCheckCircle   size={120} color="teal"/>
                        <Button rightIcon={<FaExternalLinkAlt  />} my={5} colorScheme="twitter" onClick={handleOpenAxelerScan}>
                           Check Tx status
                        </Button>
                        <Button variant="outline" colorScheme="twitter" onClick={handleSendMore}>I want to send more tokens</Button>
                      </Box>}
                      {! isTokensSent &&
                    <Box  mt={3} >
                       <Text fontSize='2xl' fontWeight='bold' color='gray.600' my={3}>Paying @{USER_DATA?.username}</Text>
                     <Select variant='unstyled'  py={3}  h={10} border='1px solid' borderColor='gray.200' value={sourceChain} onChange = {e => setsourceChain(e.target.value)}>
                       <option value="binance">Binance</option>
                        <option value="Polygon">Polygon</option>
                         <option value="Fantom">Fantom</option>
                     </Select>
                     <Select variant='unstyled'  py={3}  h={10} border='1px solid' borderColor='gray.200' value={selectedPaymentCurrency} onChange = {e => setselectedPaymentCurrency(e.target.value)}>
                       <option value='wbnb-wei'>BNB</option>
                        <option value="wmatic-wei">MATIC</option>
                         <option value="wftm-wei">FTM</option>
                         <option value="uausdc">USDC</option>
                     </Select>

                       <Input  type='number'    placeholder='Amount'   value={tokenAmount} variant='unstyled'  py={2} border='1px solid' borderColor='gray.200' onChange ={e => settokenAmount(e.target.value)}             />
                        
                        <Button colorScheme='twitter' w='100%' mt={7} onClick= {handleSendTokens} disabled={isGeneretingAddress || ! tokenAmount}> {isGeneretingAddress ? 
                           <Spinner  />  : "Pay Now"
                        }</Button>
                        
                       {isTokensSent  &&  <Text>congratulaions your  tokns have  been sent</Text>}
                       
                     </Box>
}
                 </ModalBody>
             </ModalContent>
             </Modal>
        <Flex  direction={{base : 'column', lg : 'row'}}>
            <Box bgGradient='linear(to-br, #7928CA, #FF0080)'  h={{base : '30vh', lg : '100vh'}} w={{base : '100%', lg : '25%'}}></Box>
            <Box  h={{base : '70vh', lg : "100vh"}} w={{base : '100%', lg : "75%"}} >
              <Box   mt={{base : "30px", lg : '90px'}} p={5}>
                <Box ml={{base : '0px', lg : '100px'}} w={{base : '100%', lg : '600px'}}>
                   <Avatar    src='https://nftcoders.com/avatar/avatar-cool.svg'   name='abdlu'  size='xl' mb={10} />
                     <Text fontSize = '3xl' fontWeight='bold'>{USER_DATA?.username}</Text>
                      <Text fontSize='2xl' color='gray.600' py={5}>{USER_DATA?.userInfo}</Text>
                        <HStack gap={8}>
                           <IconButton icon={ <AiOutlineTwitter   size={28}  color = "gray" cursor='pointer' onClick={handleOpenTwitter}/>}  />
                            <IconButton icon={   <AiOutlineWhatsApp  size={25}  color = "gray" cursor='pointer' onClick={handleOpenWhatsapp} />}  />
                             <IconButton  icon={<TiWorld     size={28}  color = "gray" cursor='pointer' onClick={handleOpenWebsite}/>} />
                        </HStack>
                          
                        
                      <Box display='flex' flexWrap='wrap' gap={5}>
                      <HStack bg='yellow.100' w='200px' py={2} px={3} mt={6} rounded='lg' cursor='pointer' onClick={toggleBNBModal}>
                            <Avatar   src='/img/binance.svg' size='sm' />
                            <Text fontSize='xl' color="yellow.900" >Pay with BNB</Text>
                         </HStack>
                         <HStack bg='#b0aeb5' w='210px' py={2} px={3} mt={6} rounded='lg' cursor='pointer' onClick={togglePolygonModal}>
                            <Avatar   src='/img/polygon.svg' size='sm' />
                            <Text fontSize='xl' color="purple.600" >Pay with MATIC</Text>
                         </HStack>

                         <HStack bg='blue.100' w='230px' py={2} px={3} mt={6} rounded='lg' cursor='pointer' onClick={ toggleFantomModal}>
                            <Avatar   src='/img/fantom.svg' size='sm' />
                            <Text fontSize='xl' color="blue.500" >Pay with FTM</Text>
                         </HStack>

                         <HStack bg='#DAE8F6' w='230px' py={2} px={3} mt={6} rounded='lg' cursor='pointer' onClick={ toggleUsdcModal}>
                            <Avatar   src='/img/usdc.png' size='sm' />
                            <Text fontSize='xl' color="blue.500" >Pay with USDC</Text>
                         </HStack>
                      </Box>
                   </Box>
              </Box>
            </Box>
        </Flex>
     </Box>
  )
}


