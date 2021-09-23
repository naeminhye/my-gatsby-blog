import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import NavBar from "@components/NavBar"

import "./styles.scss"

export default function PageLayout({ pageTitle = "", children }) {
  const {
    site: {
      siteMetadata: { title: siteTitle, description },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <title>
          {pageTitle} | {siteTitle}
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <NavBar />
      {children}
    </>
  )
}