// use of Outlet
// import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

// outlet work as a wilish where you put an Outlet it just change the Outlet data
function Layout() {
  return (
    <>
       <Header/> {/* Remains Change */}
       <Outlet/> {/* Outlet is able to aplicable the Change */}
       <Footer/> {/* Remains Change */}
    </>
  )
}

export default Layout