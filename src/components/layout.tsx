import React from 'react'
import Helmet from 'react-helmet'

import 'bootstrap/dist/css/bootstrap.css'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Alessio Dionisi ~ Software Engineer</title>
      </Helmet>
      {children}
    </>
  )
}

export default Layout
