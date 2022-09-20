import React from 'react'
import '../../assets/scss/base/_layout.scss'
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return <div className='layout'>
        <Outlet>
        {children}
        </Outlet>
    </div>
}

export default Layout