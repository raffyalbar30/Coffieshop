import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'



const Authpage = () => {
    const token = localStorage.getItem("token") === null ? false : true;
    return (
        <>
          {token ? <Outlet/> : <Navigate to="/login" />};
        </>
    )
}

export default Authpage;
