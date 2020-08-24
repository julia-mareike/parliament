import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { Results } from '../components/results'
import { getCoordinates, getSeatAllocations } from '../utils'
import { years } from '../utils/data'

import './index.css'

const PastResults = () => {
  const coordinates = getCoordinates()
  const [activeYear, setActiveYear] = useState(years[0])
  const [seats, setSeats] = useState(getSeatAllocations(activeYear))

  return (
    <Layout>
      <SEO title="Parliament" />
      <div className='mainWrapper'>
        <div className='wrapper parliament'>
          <Parliament coordinates={coordinates} seats={seats} year={activeYear} />
          <div className='rowWrapper buttons'>
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
          <Results year={activeYear} />
        </div>
      </div>
    </Layout>
  )
}

export default PastResults
