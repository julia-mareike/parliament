import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Parliament } from '../components/parliament'
import { getCoordinates, calculateVotes, getSeats } from '../utils'
import { pastVotes, pastPastVotes } from '../utils/data'

const getSeatAllocations = () => {
  const totals = calculateVotes(pastPastVotes.electorates, pastPastVotes.votes)
  return getSeats(totals)
}

const IndexPage = () => {
  const coordinates = getCoordinates()
  const [seats, setSeats] = useState(getSeatAllocations())

  return (
    <Layout>
      <SEO title="Parliament" />
      <Parliament coordinates={coordinates} seats={seats}/>
      <div>
        <a href='https://thespinoff.co.nz/politics/14-09-2017/mmp-maths-how-party-vote-percentages-become-seats-in-parliament/'>what? -> words</a>
      </div>
      <div>
        <a href='https://www.youtube.com/watch?v=pljoleVHFug'>huh? -> video</a>
      </div>
    </Layout>
  )
}

export default IndexPage
