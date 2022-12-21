import React from "react"
import { useContestQuery } from "../../hooks/useContestQuery"
import { Container, Section } from "../layoutComponents"

export default function ContestInfo() {
  const data = useContestQuery()
  return (
    <Section>
      <Container>
        <div
          contentEditable="true"
          dangerouslySetInnerHTML={{
            __html: `${data.wpPage.aCF_ContestPage.contestInformation}`,
          }}
        ></div>
      </Container>
    </Section>
  )
}