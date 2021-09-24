import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import NavBar from "@components/layout/NavBar"

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
    <div className="layout">
      <Helmet>
        <title>
          {pageTitle} | {siteTitle}
        </title>
        <meta name="description" content={description} />
      </Helmet>
      <NavBar title={siteTitle} />
      <main className="main">{children}</main>
    </div>
  )
}
