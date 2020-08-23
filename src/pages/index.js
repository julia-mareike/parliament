import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Parliament } from '../components/parliament'
import { Inputs } from '../components/inputs'
import { getCoordinates, getSeatAllocations } from '../utils'
import { years } from '../utils/data'

import "./index.css"

const IndexPage = () => {
  const coordinates = getCoordinates()

  const [activeYear, setActiveYear] = useState(years[0])
  const [seats, setSeats] = useState(getSeatAllocations(activeYear))
  return (
    <Layout>
      <SEO title="Parliament" />
      <div className='mainWrapper'>
        <div className='wrapper parliament'>
        <Parliament coordinates={coordinates} seats={seats} year={activeYear} />
        <div className='buttons'>
          {years.map(year => (
            <button
              name={year}
              key={year}
              onClick={() => {
                setSeats(getSeatAllocations(year))
                setActiveYear(year)
              }}
            >
              {year}
            </button>
          ))}
        </div>
        </div>
        <div className='wrapper'>
          <Inputs year={activeYear} setSeats={setSeats} />
        </div>
      </div>
      {/*<div>*/}
      {/*  <a href='https://thespinoff.co.nz/politics/14-09-2017/mmp-maths-how-party-vote-percentages-become-seats-in-parliament/'>what? -> words</a>*/}
      {/*</div>*/}
      {/*<div>*/}
      {/*  <a href='https://www.youtube.com/watch?v=pljoleVHFug'>huh? -> video</a>*/}
      {/*</div>*/}
    </Layout>
  )
}

export default IndexPage
