import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Andreas Bretschneider</h1>
        <p>
          Software development is my passion. <br />
          Lets build something awesome!
        </p>
      </div>
    </div>
    <nav>
      <ul>
        {/* <li style={{ width: 148 }}>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('projects')
            }}
          >
            Projects
          </a>
        </li> */}
        <li style={{ width: 150 }}>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('imprint')
            }}
          >
            Imprint
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
