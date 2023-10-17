"use client"

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Button from "./Button"
import { useEffect } from "react"
import axios from "axios"

const Navbar = () => {
  const [show,setShow] = useState(false)
  const [session,setSession] = useState(null)


  function handleShow(){
    setShow(!show)
  }

  useEffect(()=>{

    async function getSession() {
      try {
        const response = await axios.get("/api/auth/session");
        setSession(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    getSession()

  },[])


  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/asterix.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex ml-auto">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
                {// @ts-ignore
                session?.user ? "" :
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
        } 
      </ul>

      

      <div className="lg:flexCenter hidden">

      </div>


      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={handleShow}
      />
      {show && 
    <ul className={`absolute top-48 right-16 bg-white rounded-lg p-10 shadow-md ${show ? 'block' : 'hidden'} z-50`}
    style={{ transform: 'translateY(-50%)' }}>
              {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all z-30 hover:font-bold">
            {link.label}
          </Link>
        ))}
        
        {// @ts-ignore
        session?.user ? "" :
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
        } 
      </ul>  

      }
    </nav>
  )
}

export default Navbar
