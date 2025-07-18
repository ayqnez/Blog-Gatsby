import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.css"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = ({ siteTitle }) => (

  <header className={styles.header}>

    <Link to="/" className={styles.logoLink}>
      {siteTitle}
    </Link>
  
    <nav className={styles.navLinks}>
      <Link to="/" className={styles.navLink}>Home</Link>
      <Link to="/about-me" className={styles.navLink}>About Me</Link>
      <a href="https://github.com/ayqnez" className={styles.navLink} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a >
      <a href="https://www.linkedin.com/in/ayan-kassen-8bab7831a/" className={styles.navLink} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </nav>

  </header>

)

export default Header
