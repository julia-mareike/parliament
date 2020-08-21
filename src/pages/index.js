import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Parliament } from '../components/parliament'
import { getCoordinates, calculateVotes, getSeats } from '../utils'
import { pastVotes } from '../utils/data'

const IndexPage = () => {
  const coordinates = getCoordinates()
  const years = Object.keys(pastVotes).sort((a, b) => a + b)

  const getSeatAllocations = year => {
    const totals = calculateVotes(pastVotes[year].electorates, pastVotes[year].votes)
    return getSeats(totals)
  }

  const [seats, setSeats] = useState(getSeatAllocations(years[0]))
  return (
    <Layout>
      <SEO title="Parliament" />
      <Parliament coordinates={coordinates} seats={seats}/>
      {years.map(year => (
        <button
          name={year}
          onClick={() => {
            setSeats(getSeatAllocations(year))
          }}
        >
          {year}
        </button>
      ))}
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
