import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        {siteTitle}
      </Link>

      {/* Desktop nav */}
      <nav className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about-me" className={styles.navLink}>About Me</Link>
        <a href="https://github.com/ayqnez" className={styles.navLink} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ayan-kassen-8bab7831a/" className={styles.navLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </nav>

      {/* Mobile menu button */}
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile dropdown */}
      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
        <Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
        <Link to="/about-me" className={styles.navLink} onClick={toggleMenu}>About Me</Link>
        <a href="https://github.com/ayqnez" className={styles.navLink} onClick={toggleMenu} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ayan-kassen-8bab7831a/" className={styles.navLink} onClick={toggleMenu} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </nav>
    </header>
  )
}

export default Header
