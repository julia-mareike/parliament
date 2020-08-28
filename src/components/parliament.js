import React from 'react'
import {
  RoughProvider, Circle
} from 'react-roughjs'

import PartyLegend from './party-legend'
import { styles } from '../utils'
import { getOverhangCoordinates } from '../utils/get-coordinates'

export const Parliament = ({ coordinates, seats, year }) => {
  let viewHeight = 480

  let seatCoordinates = coordinates.map((circle, coordinatesIndex) => {
    if (!seats) {
      circle.options = styles['empty']
      return circle
    }
    let totalAllocated = 0
    for (let i = 0; i < seats.length; i++) {
      totalAllocated += seats[i].allocated
      if (coordinatesIndex < totalAllocated) {
        circle.options = styles[seats[i].party]
        return circle
      }
    }
    return null
  })
  if (seats) {
    let overhangCoordinates = getOverhangCoordinates()
    for (let party in seats) {
      if (seats[party].overhang) {
        let { overhang } = seats[party]
        while (overhang > 0) {
          seatCoordinates.push({
            ...overhangCoordinates[0],
            options: styles[seats[party].party]
          })
          overhangCoordinates.shift()
          overhang--
        }
      }
    }

    if (seats.length > 10) {
      viewHeight = viewHeight + ((seats.length - 10) * 20)
    }
  }
  return (
    <svg viewBox={`0 0 360 ${viewHeight}`}>
      <RoughProvider>
        {seatCoordinates.map((seat, i) => (
          <Circle
            x={seat.x}
            y={seat.y}
            diameter={seat.diameter}
            options={seat.options}
            key={i}
          />
        ))}
        <PartyLegend seats={seats} />
      </RoughProvider>
    </svg>
  )
}
