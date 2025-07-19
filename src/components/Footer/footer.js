import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import * as styles from "./footer.module.css";

const Footer = ({ title, author }) => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <b>{title}</b> {year} — Built with {author}
            </div>

            <nav className={styles.navLinks}>
                <a
                    href="https://github.com/ayqnez"
                    className={styles.navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub size={24} />
                </a>
                <a
                    href="https://www.linkedin.com/in/ayan-kassen-8bab7831a/"
                    className={styles.navLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={24} />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
