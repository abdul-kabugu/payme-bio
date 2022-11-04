import { Box, Heading, HStack, Menu, MenuButton, Text,  Button, MenuList, MenuItem, Flex, } from '@chakra-ui/react'
import React from 'react'
import TopNav from './TopNav'
import { AiOutlineLogout, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { TbChevronDown, TbFileInvoice } from 'react-icons/tb'
import {} from 'react-icons/tb'
import {NavLink, Link} from 'react-router-dom'
import { comingSoon, links } from '../assets/constant'
import { useMoralis } from 'react-moralis'


export default function SideBar() {
  const {logout} = useMoralis()
     const  NavLinks = () => (
        <Box>
          {links.map((link, i) => {

            return(
                <NavLink key={i} to = {link.to} color='gray'>
                    <Flex alignItems='center' gap={7} my={8} cursor='pointer'>
                  <link.icon    size={20}  style={{color : 'gray'}}  />
                   {link.name}
                   </Flex>
                </NavLink>
            )
          })}
        </Box>
     )

     const  ComingSoon = () => (
      <Box>
        {comingSoon.map((link, i) => {

          return(
              <NavLink key={i} to = {link.to} color='gray'>
                  <Flex alignItems='center' gap={7} my={8} cursor='pointer'>
                <link.icon    size={20}  style={{color : 'gray'}}  />
                 {link.name}
                 </Flex>
              </NavLink>
          )
        })}
      </Box>
   )
  return (
    <Box  overflowY='hidden'>
     
    <NavLinks   />
      <Button leftIcon={<AiOutlineLogout />} colorScheme="twitter" onClick={logout}>Sign out</Button>
     <Text textTransform="uppercase" color="gray.500" my={10}>coming soon ..</Text>
      <ComingSoon  />
    </Box>
  )
}
