import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Parliament } from '../components/parliament'
import { getCoordinates } from '../utils'

const getSeats = () => {
  // 2017 results
  return [
    {name: 'National', value: 56},
    {name: 'ACT', value: 1},
    {name: 'Greens', value: 8},
    {name: 'Labour', value: 46},
    {name: 'NZFirst', value: 9}
  ]
}

const IndexPage = () => {
  const [coordinates, setCoordinates] = useState(getCoordinates())
  const [seats, setSeats] = useState(getSeats())

  return (
    <Layout>
    <SEO title="Parliament" />
    <h1>Seats</h1>
      <div>
        <a href='https://thespinoff.co.nz/politics/14-09-2017/mmp-maths-how-party-vote-percentages-become-seats-in-parliament/'>what? -> words</a>
      </div>
    <div>
      <a href='https://www.youtube.com/watch?v=pljoleVHFug'>huh? -> video</a>
    </div>
    <Parliament coordinates={coordinates} seats={seats}/>
    {/* temporary button to show render changes */}
    <button
      onClick={() => {
        // 2014 results
        setSeats([
          {name: 'Labour', value: 32},
          {name: 'NZFirst', value: 11},
          {name: 'Greens', value: 14},
          {name: 'Maori', value: 2},
          {name: 'UnitedFuture', value: 1},
          {name: 'ACT', value: 1},
          {name: 'National', value: 60}
        ])
    }}>
      Button
    </button>
  </Layout>
  )
}

export default IndexPage
