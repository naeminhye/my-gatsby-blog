import React from "react"

import PageLayout from "@components/layout/PageLayout"

export default function About() {
  return (
    <PageLayout pageTitle="About">
      <div className="flex-center flex-column">
        <h1>About page</h1>
        <span>by @jaceynae</span>
      </div>
    </PageLayout>
  )
}
