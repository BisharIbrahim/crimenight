import React from 'react'
import Navbar from '@components/Navbar'
import Sidebar from '@components/Sidebar';
import '@styles/MainLayout.css'


interface Props{
    children: React.ReactNode;
}

function MainLayout({children}: Props){
    return(
        <div className='mainLayout'>
            <Sidebar/>
            <div>{children}</div>
        </div>
    )
}

export default MainLayout