import React from 'react'
import {
  Circle, Rectangle
} from 'react-roughjs'

import { CalculatorInstructions } from './calculator-instructions'
import { styles, formatName, useStyles } from '../utils'

const PartyLegend = ({ seats }) => {
  const { fontOverride, monospace } = useStyles()
  let rectangleBase = 200
  let minRectangleHeight = 40
  let circleBase = 220
  let textBase = 225
  let seatsArray = []
  let overhang = 0
  if (seats) {
    for (let party in seats) {
      if (seats[party].overhang) {
        overhang += seats[party].overhang
      }
      if (seats[party].party) {
        seatsArray.push(seats[party])
      }
    }
    seatsArray.sort((a, b) => b.allocated - a.allocated)
  }
  let multiplier = seatsArray.length > 6 ? seatsArray.length > 10 ? 26 : 27 : 29
  let calculatedRectangleHeight = seatsArray.length * multiplier
  let rectangleHeight = minRectangleHeight > calculatedRectangleHeight ? minRectangleHeight : calculatedRectangleHeight
  return (
    <>
      {!seats && <CalculatorInstructions />}
      {seats &&
        <>
          <text
            x={132}
            y={rectangleBase - 35}
            className={monospace}
          >
            {120 + overhang} seats
          </text>
          <Rectangle
            x={90}
            y={rectangleBase}
            width={180}
            height={rectangleHeight}
            options={{ roughness: 2, fill: 'rgba(0,0,0,0.1)', fillStyle: 'solid' }}
          />
          {seatsArray.map((party, i) => {
            if (party.overhang) party.allocated = party.allocated + party.overhang
            if (!party.party) return null
            return (
              <React.Fragment
                key={party.party}
              >
                <Circle
                  x={110}
                  y={circleBase + (25 * i)}
                  diameter={14}
                  options={styles[party.party]}
                />
                <text
                  x={122}
                  y={textBase + (25 * i)}
                  className={fontOverride}
                >
                  {party.allocated} {formatName(party.party)}
                </text>
              </React.Fragment>
            )
          })}
        </>
      }
  </>
  )
}

export default PartyLegend
