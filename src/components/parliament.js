import React from 'react'
import {
  RoughProvider, Circle, Rectangle
} from 'react-roughjs'

import PartyLegend from './party-legend'
import { styles } from '../utils'
import { getOverhangCoordinates } from '../utils/get-coordinates'

export const Parliament = ({ coordinates, seats }) => {
  let seatCoordinates = coordinates.map((circle, i) => {
    if (!seats) return circle
    if (i < seats[0].allocated) {
      circle.options = styles[seats[0].party]
    } else if (i < seats[0].allocated + seats[1].allocated) {
      circle.options = styles[seats[1].party]
    } else if (i < seats[0].allocated + seats[1].allocated + seats[2].allocated) {
      circle.options = styles[seats[2].party]
    } else if (i < seats[0].allocated + seats[1].allocated + seats[2].allocated + seats[3].allocated) {
      circle.options = styles[seats[3].party]
    } else if (i < seats[0].allocated + seats[1].allocated + seats[2].allocated + seats[3].allocated + seats[4].allocated) {
      circle.options = styles[seats[4].party]
    } else if (seats[5] && i < seats[0].allocated + seats[1].allocated + seats[2].allocated + seats[3].allocated + seats[4].allocated + seats[5].allocated){
      circle.options = styles[seats[5].party]
      // omg stop
    } else if (seats[6] && i < seats[0].allocated + seats[1].allocated + seats[2].allocated + seats[3].allocated + seats[4].allocated + seats[5].allocated + seats[6].allocated){
      circle.options = styles[seats[6].party]
    } else if (seats[7] && i < seats[0].allocated + seats[1].allocated + seats[2].allocated + seats[3].allocated + seats[4].allocated + seats[5].allocated + seats[6].allocated + seats[7].allocated){
      circle.options = styles[seats[7].party]
    }
    return circle
  })
  // only handles one overhang
  if (seats && seats.overhang) {
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
  }
  return (
    <svg height={500} width={360}>
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
      <PartyLegend seats={seats}/>
    </RoughProvider>
  </svg>
  )
}
