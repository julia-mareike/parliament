import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Parliament } from '../components/parliament'
import { Inputs } from '../components/inputs'
import { getCoordinates, getSeatAllocations } from '../utils'

import './index.css'

const IndexPage = () => {
  const coordinates = getCoordinates()
  const [seats, setSeats] = useState(getSeatAllocations('2020'))

  return (
    <Layout>
      <SEO title="Parliament" />
      <div className='mainWrapper'>
        <div className='wrapper parliament'>
          <Parliament coordinates={coordinates} seats={seats} year={'2020'} />
        </div>
        <div className='wrapper'>
          <Inputs year={'2020'} setSeats={setSeats} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
