import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'

import {  useNavigate } from "react-router-dom";
import { firebaseAuth } from './context/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Toaster } from 'react-hot-toast';


function Mainpage() {
  const navigate = useNavigate();

  
  useEffect(() => {

    (() => {

      onAuthStateChanged(firebaseAuth, (user) => {
        if (!user) { 
          navigate('/login')
        }
      });
      
    })()


  }, [])
  
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      height: "100vh"
    }}>

      <Navbar/>
      <Body />
      <Footer/>
    </div>
  )
}

export default Mainpage
