import React from "react"
import "./HomePage.css"
import Layout from "../Components/Layout"

export default function HomePage() {
  return (
    <>
      <Layout>
        <div className="home-page">
          <h1>Welcome to Organizers Unlimited</h1>
          <p>Your one-stop solution for all your organizing needs!</p>
          <div className="features">
            <h2>Features</h2>
            <ul>
              <li>Customizable organizers</li>
              <li>Easy-to-use interface</li>
              <li>Affordable pricing</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}
