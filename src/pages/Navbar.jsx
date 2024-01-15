import React from 'react'
import logo from './assets/logo.png'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useFirebase } from './context/firebase';
import toast from 'react-hot-toast';

// import './Signup.css'
function Navbar() {
    const firebase = useFirebase();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.logout().then(() => {
            toast.success("Logged out")
            navigate('/login')
           
          }).catch((error) => {
            console.log("Error");
          });
            
    };

// code
    return (
        <div class="Navbar">
            <nav class="navbar navbar-light bg-body-tertiary gradient-custom-2 ">
                
                    <div class="container-fluid">
                        
                            <img
                                src={logo}
                                class="px-8"
                                height="60"
                                alt="Logo"
                                loading="lazy"
                            />
                            <h3 class="text-white px-10 ">Let's Talk</h3>

                        <div class="flex align-items-right text-right">
                            <button type="button" class="btn btn-link px-3 me-2 text-white ">
                              UserName
                            </button>
                           <NavLink to="/"> <button onClick={handleSubmit} type="button" class="btn btn-primary me-3">
                               Log Out
                            </button></NavLink>
                        </div>

                    </div>
                
            </nav>
        </div>
    )
}

export default Navbar
