import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Pages/Footer'

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            < Footer></Footer>
        </div>
    )
}

export default Main
