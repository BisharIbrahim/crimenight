import React from 'react'
import Navbar from '@components/Navbar'
// import styles from '@styles/MainLayout.css'


interface Props{
    children: React.ReactNode;
}

function MainLayout({children}: Props){
    return(
        <div className='mainLayout'>
            <Navbar/>
            <div>{children}</div>
        </div>
    )
}

export default MainLayout