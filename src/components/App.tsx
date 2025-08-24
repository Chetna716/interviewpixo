import React, { VFC, useEffect, useState } from 'react'
import { css } from '@emotion/css'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { TCanvas } from './three/TCanvas'
import About from './pages/About'

const ScrollHandler: VFC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return
      
      e.preventDefault()
      setIsScrolling(true)

      if (e.deltaY > 0 && location.pathname === '/') {
        // Scroll down - go to about page
        navigate('/about')
      } else if (e.deltaY < 0 && location.pathname === '/about') {
        // Scroll up - go to home page
        navigate('/')
      }

      setTimeout(() => setIsScrolling(false), 1000)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [navigate, location.pathname, isScrolling])

  return null
}

export const App: VFC = () => {
  return (
    <Router>
      <div className={styles.container}>
        {/* Background Shader */}
        <TCanvas />
        
        {/* Scroll Handler */}
        <ScrollHandler />

        {/* Foreground Content */}
        <div className={styles.content}>
          <Navbar />
          <Routes>
            {/* Home ka content direct yaha hi likha */}
            <Route
              path="/"
              element={
                <section style={{ height: '100vh', padding: '2rem' }}>
                  <h1>PIXONOIDS</h1>
                  <p>Creative portfolio with shader-powered interactions ✨</p>
                  <div style={{ 
                    position: 'absolute', 
                    bottom: '2rem', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                    opacity: 0.7
                  }}>
                    <p>Scroll down to explore</p>
                    <div style={{ fontSize: '2rem' }}>↓</div>
                  </div>
                </section>
              }
            />

            {/* About page alag file se */}
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

const styles = {
  container: css`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #000;
  `,
  content: css`
    position: relative;
    z-index: 10;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    background-color: #000;
  `,
}
