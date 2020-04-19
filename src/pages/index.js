import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsForsale.edges.map(({ node: forsale }) => (
        <div key={forsale.id} className="showcase__item">
          <figure className="card">
            <Link to={`/forsale/${forsale.slug}`} className="card__image">
              <Img fluid={forsale.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/forsale/${forsale.slug}`}>{forsale.title}</Link>
              </h6>
              <div className="card__description">
                <p>{forsale.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsForsale(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
