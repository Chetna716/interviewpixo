import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.link}>Home</Link>
      <Link to="/about" className={styles.link}>About</Link>
    </nav>
  )
}

const styles = {
  nav: css`
    position: fixed;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 2rem;
    z-index: 20;
  `,
  link: css`
    color: #fff;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  `,
}
