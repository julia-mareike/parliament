export const formatName = name => {
  let regex = new RegExp(/(?=[A-Z][a-z])|(?=NZ)/)
  return name.split(regex).join(' ')
}

export const removeWhitespace = name => {
  return name.replace(/ /g,'')
}
