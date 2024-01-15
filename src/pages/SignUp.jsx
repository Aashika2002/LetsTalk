import React, { useEffect, useState } from 'react'
import './Logins.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';
import logo from './assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom';
import { firebaseAuth, useFirebase } from './context/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast';

function SignUp() {

    const firebase = useFirebase();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    
    useEffect(() => {
        (() => {
    
          onAuthStateChanged(firebaseAuth, (user) => {
            if (user) { 
              navigate('/')
            }
          });
        })()
    
      }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        await firebase.signIntoExistingAccount(email, password)
            .then((userCredential) => {
               
                navigate('/')
                toast.success("Logged in")
            })
            .catch((error) => {
                alert("Check Credentials");
                console.log(error)
            });


    };


    return (
        <div className="SignUp">
            <MDBContainer className="my-5 gradient-form">

                <MDBRow>

                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column ms-5">

                            <div className="text-center">
                                <img src={logo}
                                    style={{ width: '185px' }} alt="logo" />
                                <h4 className="mt-1 mb-5 pb-1 font-bold">Let's Talk</h4>
                            </div>

                            <p>Please login to your account</p>


                            <MDBInput wrapperClass='mb-4' onChange={e => setEmail(e.target.value)} value={email} required={true} label='Email address' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' onChange={e => setPassword(e.target.value)} value={password} required={true} label='Password' id='form2' type='password' />


                            <div className="text-center pt-1 mb-5 pb-1">
                                <button onClick={handleSubmit} className="mb-4 w-100 gradient-custom-2 text-white border-white">Sign in</button>
                                <a className="text-muted" href="#!">Forgot password?</a>
                            </div>

                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                <p className="mb-0">Don't have an account?</p>
                                <NavLink to="/signup"> <MDBBtn outline className='mx-2' color='danger'>
                                    Create New
                                </MDBBtn></NavLink>
                            </div>

                        </div>

                    </MDBCol>

                    <MDBCol col='6' className="mb-5">
                        <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                <h4 class="mb-4">We are more than just a company</h4>
                                <p class="small mb-0 text-xl">
                                    "Where words find their home and conversations come to life. Welcome to Let's Talk, where every message is a story, and every connection is an adventure. Chat brilliantly, connect effortlessly."
                                </p>
                            </div>

                        </div>

                    </MDBCol>

                </MDBRow>

            </MDBContainer>

        </div>
    )
}

export default SignUp
