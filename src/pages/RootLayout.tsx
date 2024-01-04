import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'

const RootLayout: React.FC = () => {
  return (
    <>
        <Sidebar />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default RootLayout
