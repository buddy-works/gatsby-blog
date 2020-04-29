import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Button from "react-bootstrap/Button"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout imageUrl={frontmatter.imageUrl} postTitle={frontmatter.title}>
      <div className="my-4">
        <Link to="/"><Button>Back</Button></Link>
        <p className="text-muted float-right">{frontmatter.date}</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        imageUrl
      }
    }
  }
`
