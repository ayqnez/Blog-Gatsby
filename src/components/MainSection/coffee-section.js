import * as React from "react"
import * as styles from "./coffee-section.module.css"

import codeImg from '../../images/coding.png'

const CoffeeSection = () => {
    return (
        <section className={styles.container}>

            <div className={styles.textContent}>

                <h1 className={styles.title}>
                    Hi, I'm Ayan Full Stack Dev
                </h1>

                <p className={styles.subtitle}>
                    In this blog, I will tell you where to start studying programming, what to focus on and what mistakes should be avoided.
                </p>
            </div>

            <img
                className={styles.img}
                src={codeImg}
                alt="Coffee preparation"
            />

        </section>
    )
}

export default CoffeeSection;