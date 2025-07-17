import * as React from "react"

import { Link } from "gatsby"

import * as styles from './button.module.css'

const Button = ({ text }) => {
    return (
        <div className={styles.buttonWrapper}>
            <Link className={styles.btn} to="/">{text}</Link>
        </div>
    )
}

export default Button;