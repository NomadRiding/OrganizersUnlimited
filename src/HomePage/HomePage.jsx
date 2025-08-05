import React from "react"
import "./HomePage.css"
import Hero from "../Components/Hero"
import Carousel from "../Components/Carousel"
import Layout from "../Components/Layout"

export default function HomePage() {
  return (
    <Layout>
      <div className="heroSection">
        <Hero />
        <Carousel />
      </div>
    </Layout>
  )
}
