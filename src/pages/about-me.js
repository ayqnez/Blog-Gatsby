import * as React from "react"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import * as styles from "./about-me.module.css"
import Button from "../components/Button/button"

const AboutMePage = () => {
    return (
        <Layout>

            <div className={styles.container}>

                <div>
                    <StaticImage
                        src="../images/me.jpg"
                        alt="me"
                        width={500}
                        placeholder="blurred"
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <h1 className={styles.title}>About Me</h1>
                    <p>
                        Hi! My name is Ayan — I'm a full-stack developer passionate about creating modern, responsive web applications.
                        I specialize in React and Spring Boot, and enjoy working on clean, maintainable code.
                    </p>
                    <p>
                        I believe that the best software is simple, intuitive, and solves real problems. I enjoy learning new technologies,
                        collaborating with other developers, and building tools that people love to use.
                    </p>
                    <p>
                        When I'm not coding, I explore design systems, contribute to open-source projects, and enjoy reading about
                        software architecture and engineering practices.
                    </p>
                    <p>
                        Let's build something great together!
                    </p>


                </div>

            </div>

            <Button text={"← Back to Home"} />

        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutMePage
