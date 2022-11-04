
import { Box, Text } from '@chakra-ui/react'
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import { Admin, CreateProfile, UserInfo } from './components';
import Payme from './pages/Payme';
import DashBoardPortal from './components/DashBoardPortal';
import Helmet from 'react-helmet'
function App() {
  return (
    <main>
      <Helmet>
        <title>Debble | Get Paid In Crypto</title>
        <meta name="description" content="Debble.xyz - making web3 payments easier"></meta>
        <meta itemprop="name" content="Debble | Get Paid iIn Crypto"   />
        <meta
          itemprop="description"
          content="Debble.xyz - making web3 payments easier"
        />
         <meta
          itemprop="image"
          content="/img/cover.png"
        />
      </Helmet>
      <Box >
        <Routes>
         <Route path='/'  element = {<Home />}  />
         <Route  path='/dashboard'  element = {<Dashboard  />}>
          <Route path='/dashboard'  element = {<DashBoardPortal />}  />
          <Route   path='/dashboard/profile'    element = {<Admin />}     />
         </Route>
          <Route path='/user' element = {<Payme  />}/>
           <Route path='/:userId'   element = {<Payme />}     />
         </Routes>
     </Box>
     </main>
  );
}

export default App;
