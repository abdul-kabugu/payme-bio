import { Box, Heading, Hide, Show} from '@chakra-ui/react'
import React from 'react'
import { SideBar, TopNav, CreateProfile } from '../components'
import {Outlet, Route, Routes} from 'react-router-dom'
export default function Dashboard() {
  return (
    <>
    <TopNav  />
<Box mt={89} display='flex' p={4} h='86vh'  overflowY='hidden' >

  <Box flex='1'>
    <Show above='md'>
  <SideBar  />
  </Show>
  </Box>
  <Box  w={{base : '100%', md : '61%', lg : '71%', xl : '81%'}} overflowY='scroll'>
    
    
    <Outlet   />
    </Box>
</Box>
</>
  )
}
