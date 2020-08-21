import React from 'react'
import {
  Circle, Rectangle
} from 'react-roughjs'

import {styles} from '../utils'

const PartyLegend = ({ seats }) => {
  let circleBase = 200
  let textBase = 205
  let seatsArray = []
  for (let party in seats) {
    if (seats[party].party) {
      seatsArray.push(seats[party])
    }
  }
  return (
    <>
    <Rectangle
      x={115}
      y={180}
      width={130}
      height={seatsArray.length * 27}
      options={{ roughness: 3 }}
    />
      {seatsArray.map((party, i) => {
        if (party.party) {
          return (
            <>
            <Circle
              x={130}
              y={circleBase + (25 * i)}
              diameter={14}
              options={styles[party.party]}
            />
            <text
              x={142}
              y={textBase + (25 * i)}
              className='legend'
            >
              {party.party}
            </text>
              </>
          )
        }
      })}
  </>
  )
}

export default PartyLegend
