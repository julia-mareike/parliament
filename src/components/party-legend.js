import React from 'react'
import {
  Circle, Rectangle
} from 'react-roughjs'

import { styles, formatPartyName } from '../utils'
import useStyles from '../../plugins/custom-mui-theme/theme/custom'

const PartyLegend = ({ seats }) => {
  const { fontOverride } = useStyles()
  let rectangleBase = 180
  let circleBase = 200
  let textBase = 205
  let seatsArray = []
  let overhang = 0
  for (let party in seats) {
    if (seats[party].overhang) {
      overhang += seats[party].overhang
    }
    if (seats[party].party) {
      seatsArray.push(seats[party])
    }
  }
  seatsArray.sort((a, b) => b.allocated - a.allocated)
  return (
    <>
      <text
        x={132}
        y={rectangleBase - 15}
        className='total-seats'
      >
        {120 + overhang} seats
      </text>
      <Rectangle
        x={100}
        y={rectangleBase}
        width={160}
        height={seatsArray.length * 27}
        options={{ roughness: 3 }}
      />
      {seatsArray.map((party, i) => {
        if (party.overhang) party.allocated = party.allocated + party.overhang
        if (!party.party) return null
        return (
          <React.Fragment
            key={party.party}
          >
            <Circle
              x={120}
              y={circleBase + (25 * i)}
              diameter={14}
              options={styles[party.party]}
            />
            <text
              x={132}
              y={textBase + (25 * i)}
              className={fontOverride}
            >
              {party.allocated} {formatPartyName(party.party)}
            </text>
          </React.Fragment>
        )
      })}
  </>
  )
}

export default PartyLegend
