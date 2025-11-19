import React from 'react'
import HeroScene from './components/HeroScene'
import LoginForm from './components/LoginForm'
import './login.css'

function App() {
  return (
    <div className="page">
      <HeroScene />

      <header className="site-header">
        <div className="brand">
          <span className="logo">✈️</span>
          <span className="name">Voyage</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">Destinations</a>
          <a href="#" className="nav-link">Deals</a>
          <a href="#" className="nav-link">Support</a>
        </nav>
      </header>

      <main className="hero">
        <div className="copy">
          <h1>Plan trips with style</h1>
          <p>Seamless bookings, smart itineraries, and a glassmorphic vibe for your next adventure.</p>
        </div>
        <LoginForm />
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Voyage</footer>
    </div>
  )
}

export default App
