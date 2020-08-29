export const formatName = name => {
  let regex = new RegExp(/(?=[A-Z][a-z])|(?=NZ)/)
  return name.split(regex).join(' ')
}

export const removeWhitespace = name => name.replace(/ /g,'')

export const createSlug = name => {
  if (name === 'home') return ''
  return name.toLowerCase().replace(/ /g, '-')
}
