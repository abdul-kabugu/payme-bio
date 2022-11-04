
import { Box, Text } from '@chakra-ui/react'
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import { Admin, CreateProfile, UserInfo } from './components';
import Payme from './pages/Payme';
import DashBoardPortal from './components/DashBoardPortal';

function App() {
  return (
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
    
  );
}

export default App;
