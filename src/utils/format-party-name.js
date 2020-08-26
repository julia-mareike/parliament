export const formatPartyName = partyName => {
  let regex = new RegExp(/(?=[A-Z][a-z])|(?=NZ)/)
  return partyName.split(regex).join(' ')
}
