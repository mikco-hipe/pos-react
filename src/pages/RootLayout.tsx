import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/layouts/header/Header'

const RootLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
