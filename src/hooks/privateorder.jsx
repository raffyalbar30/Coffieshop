import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'

const Privateorder = () => {
    const price = localStorage.getItem("price") === null ? false : true;
    return (
        <>
          {price ? <Outlet /> : <Navigate to="/userpage" />};
        </>
    )
}

export default Privateorder;