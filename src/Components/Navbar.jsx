import React from "react"
import "../Styles/Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">Organizers Unlimited</Link>
        </div>
        <ul>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
        <div className="schedule"></div>
      </nav>
    </>
  )
}
