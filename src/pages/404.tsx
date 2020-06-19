import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mt-5">
        <h1>Page not found 😢</h1>
        <Link to="/">Return to home</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
