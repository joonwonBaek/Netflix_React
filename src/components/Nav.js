import React, { useState, useEffect } from 'react'
import "./Nav.css"

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    })
  
    return () => {
      window.removeEventListener("scroll", () => {});
    }
  }, [])
  
  return <nav className= {`nav ${show && "nav_black"}`}>
    <img
      alt='Netflix logo'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2880px-Netflix_2015_logo.svg.png'
      className = 'nav_logo'
      onClick={() => window.location.reload()}/>
    <img
      alt='User logged'
      src='https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'
      className='nav_avatar'/>
  </nav>
}
