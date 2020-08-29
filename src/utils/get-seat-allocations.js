import { calculateVotes, getSeats } from './calculate-seats'
import { sortSeats } from './sort-seats'

import { pastVotes } from './data'

export const getSeatAllocations = (year, votes = null) => {
  console.log(votes)
  let currentVotes = votes ? votes : pastVotes[year]
  if (!currentVotes) return null
  const totals = calculateVotes(currentVotes.electorates, currentVotes.votes)
  const seats = getSeats(totals)
  return sortSeats(seats)
}
