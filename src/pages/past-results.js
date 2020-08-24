import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { Inputs } from '../components/inputs'
import { getCoordinates, getSeatAllocations } from '../utils'
import { years } from '../utils/data'

import { Button } from '@material-ui/core'

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
              <Button
                name={year}
                key={year}
                onClick={() => {
                  setSeats(getSeatAllocations(year))
                  setActiveYear(year)
                }}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
        <div className='wrapper'>
          <Inputs year={activeYear} setSeats={setSeats} />
        </div>
      </div>
    </Layout>
  )
}

export default PastResults
