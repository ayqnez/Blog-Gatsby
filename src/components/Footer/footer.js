import * as React from "react";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import * as styles from './footer.module.css'

const Footer = ({ title, author }) => {
    return (
        <>
            <footer className={styles.footer}>

                <div className={styles.content}>
                    <b>{title} </b>{new Date().getFullYear()} Built with {author}
                </div>

                <nav className={styles.navLinks}>
                    <a href="https://github.com/ayqnez" className={styles.navLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a >
                    <a href="https://www.linkedin.com/in/ayan-kassen-8bab7831a/" className={styles.navLink} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </nav>

            </footer>
        </>
    )
}

export default Footer;