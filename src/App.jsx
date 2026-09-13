import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

export default function App() {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <div className="min-h-screen bg-[#0A0A18] text-white">
      <Header isConnected={isConnected} setIsConnected={setIsConnected} />
      <Hero />
      <Features />
      {isConnected && <Dashboard />}
      <Footer />
    </div>
  )
}
