import React from 'react'
import {
  RoughProvider, Circle,
} from 'react-roughjs'

import { styles } from '../utils'

export const Parliament = ({ coordinates, seats }) => {
  let seatCoordinates = coordinates.map((circle, i) => {
    if (i < seats[0].value) {
      circle.options = styles[seats[0].name]
    } else if (i < seats[0].value + seats[1].value) {
      circle.options = styles[seats[1].name]
    } else if (i < seats[0].value + seats[1].value + seats[2].value) {
      circle.options = styles[seats[2].name]
    } else if (i < seats[0].value + seats[1].value + seats[2].value + seats[3].value) {
      circle.options = styles[seats[3].name]
    } else if (i < seats[0].value + seats[1].value + seats[2].value + seats[3].value + seats[4].value) {
      circle.options = styles[seats[4].name]
    } else if (seats[5] && i < seats[0].value + seats[1].value + seats[2].value + seats[3].value + seats[4].value + seats[5].value){
      circle.options = styles[seats[5].name]
      // omg stop
    } else if (seats[6] && i < seats[0].value + seats[1].value + seats[2].value + seats[3].value + seats[4].value + seats[5].value + seats[6].value){
      circle.options = styles[seats[6].name]
    }
    return circle
  })
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
    </RoughProvider>
  </svg>
  )
}
