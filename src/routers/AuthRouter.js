import React from 'react'
import { Route, Routes } from 'react-router';
import {Home} from '../components/vistas/Home'

const AuthRouter = () => {
    return (
       <Routes>
           <Route path="/" element={<Home/>}>
           </Route>
       </Routes>
    )
}


export default AuthRouter;
