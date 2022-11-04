import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import {MoralisProvider} from 'react-moralis'
import  { BrowserRouter} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
     <MoralisProvider appId="eREYueyBkzvQbb1oM77uaFHN9Jbak97b1k1oG5La" serverUrl="https://5msfvk6e2mxu.usemoralis.com:2053/server">
      <BrowserRouter>
    <App />
    </BrowserRouter>
   </MoralisProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

