const partyOrder = ['National', 'ACT', 'UnitedFuture', 'JAProgressive', 'Maori', 'Mana', 'TOP', 'Legalise', 'Greens', 'NZFirst', 'Labour']

export const sortSeats = seats => {
  let seatsArray = []
  for (let party in seats) {
    seatsArray.push(seats[party])
  }
  seatsArray.sort((a, b) => {
    if (!a.party || !b.party) return 0
    let partyA = partyOrder.indexOf(a.party)
    let partyB = partyOrder.indexOf(b.party)
    return partyA > partyB
  })
  return seatsArray
}
