import React from "react"
import "../Styles/Footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="footer-container">
      <p>&copy; 2025 Organizers Unlimited</p>
      <div className="footer-context">
        <div className="linkedItems">
          <ul>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
