import React from "react"

import PageLayout from "@components/layout/PageLayout"

export default function NotFound() {
  return (
    <PageLayout pageTitle="Page Not Found">
      <div className="flex-center flex-column">
        <h1>Page Not Found</h1>
        <p>Oops, we couldn't find this page!</p>
      </div>
    </PageLayout>
  )
}
