import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './sidebar'

const Adminlayout = () => {
    return (
        <div>
            <Header />
            <div className="d-flex">
                <Sidebar />
                <div className="flex-grow-1 p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Adminlayout
