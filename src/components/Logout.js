import React from 'react'


import { GlobalContext } from '../contexts/GlobalProvider';
import { useContext } from "react";
import {  useNavigate } from 'react-router-dom';

export default function Logout(props) {
    const handleLogout=(e)=>{
        const navigate=useNavigate();
        const { logoutUser} = useContext(GlobalContext);
         logoutUser(props.userid);
         window.location.reload();
            navigate('/')
    }
   
    return (
        <div>
        </div>
    )
}
