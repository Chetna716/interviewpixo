import React from 'react'

export default function About() {
  return (
    <section style={{ 
      height: '100vh', 
      padding: '2rem',
      backgroundColor: '#000',
      color: '#fff',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <h1>About Us</h1>
      <p>
        This is the About Us page. The shader background stays alive even when
        navigating between pages.
      </p>
    </section>
  )
}
