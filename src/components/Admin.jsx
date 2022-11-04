import { Box } from '@chakra-ui/react'
import React from 'react'
import { useMoralis } from 'react-moralis'
import UserInfo from './UserInfo'
import CreateProfile from './CreateProfile'
export default function Admin() {
    const {user} = useMoralis()
    console.log(user)
  return (
   <Box>
      {
        user?.attributes?.selectedChain  ? <UserInfo /> : <CreateProfile />
      }
   </Box>
  )
}
