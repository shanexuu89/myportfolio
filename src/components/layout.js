import * as React from "react"
import Header from "./Header"
import Dropdown from "../components/Dropdown"
import { useState } from "react"

const Layout = ({ children }) => {
  
  const [isOpen, setIsOpen] = useState(false)



  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      
        <main>{children}</main>
    </>
  )
}


export default Layout
