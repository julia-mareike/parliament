import { calculateVotes, getSeats } from './calculate-seats'
import { sortSeats } from './sort-seats'

import { pastVotes } from './data'

export const getSeatAllocations = (year, votes = null) => {
  let currentVotes = votes ? votes : pastVotes[year]
  const totals = calculateVotes(currentVotes.electorates, currentVotes.votes)
  if (!totals) return null
  const seats = getSeats(totals)
  return sortSeats(seats)
}
