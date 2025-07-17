import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../Header/header"
import Footer from "../Footer/footer"

import './layout.css'

const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
      </div>
      <Footer title={data.site.siteMetadata?.title || `Title`} author={data.site.siteMetadata?.author || `Author`} />
    </div>
  )
}

export default Layout
