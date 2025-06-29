import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql, Link } from "gatsby"

import * as styles from "./single-post.module.css"

const SinglePost = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const { title, date } = frontmatter

  return (
    <Layout>
      <div className={styles.postContainer}>

        <div>
          <h1 className={styles.title}>{title}</h1>

          {date && <p className={styles.date}>{date}</p>}

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>

      </div>

      <div className={styles.buttonWrapper}>
        <Link to="/" className={styles.homeButton}>← Back to Home</Link>
      </div>

    </Layout>
  )
}

export const Head = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  return <Seo title={title} />
}

export default SinglePost

export const query = graphql`
  query PostQuery($url: String) {
    markdownRemark(frontmatter: { url: { eq: $url } }) {
      id
      html
      frontmatter {
        title
        url
        date
      }
    }
  }
`
