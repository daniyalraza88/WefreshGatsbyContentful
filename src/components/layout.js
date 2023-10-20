/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar"
import Home from "../container/HeroSection"
import Services from "../container/ServicesSection"
import Area from "../container/AreaSection"
import Partner from "../container/PartnerSection"
import Questions from "../container/QuestionSection"
import Header from "./header"
import "./layout.css"
import AppBusiness from "../container/App&BusinessSection"
import Business from "../container/ForBusiness"
import Footer from "../container/Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

    <Navbar/>
    <Home/>
    <Services/>
    <Area/>
    <Partner/>
    <Questions/>
    <AppBusiness/>
    <Business/>
    <Footer/>
    {/* <div> {children} </div> */}
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div> */}
    </>
  )
}

export default Layout
