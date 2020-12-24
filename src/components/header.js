import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar is-light" style={{
         "WebkitBackdropFilter": `blur(10px)`,
         "backdropFilter": `blur(40px)`,
         "backgroundColor": `rgb(255,255,255, 0.3)`
       }}
    >
      <div className="navbar-brand">
        <Link
          to="/"
          style={{
            marginLeft: "3em",
            padding: "10px",
          }}
          className="has-text-light is-size-3"
        >
          {siteTitle}
        </Link>
      </div>
      <div className="navbar-end" style={{ marginRight: "3em" }}>
        <div className="navbar-item">
          <Link
            to="/"
            style={{
              padding: "10px",
            }}
            className="has-text-light"
          >
            Home
          </Link>
          <Link
            to="/gallery/"
            style={{
              padding: "10px",
            }}
            className="has-text-light"
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header;