import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import Mainpage from './pages/Mainpage.jsx';
import { FirebaseProvider } from './pages/context/firebase.js';
import Test from './Test.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>
            <Route path="/" element={<Mainpage />} />
               <Route path='/login' element={<SignUp />} />
       <Route path='/signup' element={<CreateAccount />} />
       <Route path="/test" element={<Test />} />
        </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Toaster
        position="top-center"
        reverseOrder={false}
      />
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </>
);


