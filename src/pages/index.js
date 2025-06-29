import * as React from "react"

import { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CoffeeSection from '../components/coffee-section'

import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import * as styles from './index.module.css'

const IndexPage = ({ data }) => {
  const [sortOrder, setSortOrder] = useState("oldest");
  const posts = [...data.allMarkdownRemark.nodes];

  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);

    return sortOrder === "newest"
      ? dateB - dateA
      : dateA - dateB;
  });

  return (
    <Layout>
      <CoffeeSection />

      <div className={styles.blogSection}>
        <h1 className={styles.pageTitle}>Blog Posts</h1>

        <div className={styles.sortControl}>
          <label htmlFor="sort">Sort by: </label>
          <select
            id="sort"
            name="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>
      </div>

      <div className={styles.blogsContainer}>
        {posts.map((post) => {
          const { title, url, date, author, image } = post.frontmatter;
          const img = getImage(image);

          return (
            <div className={styles.blogItem} key={post.id}>

              {img &&
                <Link to={`/${url}`}>
                  <GatsbyImage image={img} alt={title} className={styles.blogImg} />
                </Link>
              }

              <Link to={`/${url}`} className={styles.blogTitle}>
                {title}
              </Link>

              {date &&
                <span className={styles.blogDate}>
                  {date}
                </span>
              }

              {author &&
                <Link to="/about-me" className={styles.blogAuthor}>
                  {author}
                </Link>
              }
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query IndexPage {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          date
          url
          author
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }  
  }
`
