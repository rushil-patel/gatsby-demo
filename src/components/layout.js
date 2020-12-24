/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }`);

  return (
    <div style={{
      "backgroundImage": `url(https://res.cloudinary.com/rushildev/image/upload/v1608097281/IMG_1853_r3e7ga.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172))`,
      "backgroundPosition": "center",
      "backgroundRepeat": "no-repeat",
      "backgroundSize": "cover",
      "outline": "none"
    }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={'has-background-light hero is-fullheight'} style={{padding: '20px'}}>
        <div className={'hero-body'} style={{
          margin: `0 auto`,
          maxWidth: 900,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
        >
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;