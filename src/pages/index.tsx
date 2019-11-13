import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

interface Props {
  data: {
    cv: {
      html: string
    }
  }
}

const Container = styled.div.attrs({ className: 'container mt-5' })`
  max-width: 800px;
`

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Container dangerouslySetInnerHTML={{ __html: data.cv.html }} />
    </Layout>
  )
}

export const query = graphql`
  {
    cv: markdownRemark(frontmatter: { type: { eq: "cv" } }) {
      html
    }
  }
`

export default IndexPage
