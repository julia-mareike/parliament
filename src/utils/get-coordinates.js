export const getCoordinates = () => {

  let coordinates = []

  const fillCircle = (x, y, diameter = 20) => (
    coordinates.push({x, y, diameter})
  )

  const fillRow = (column, height) => {
    fillCircle(column, height)
    fillCircle(column + 24, height)
    fillCircle(column + 48, height)
  }

  const getLeftVerticalBlock = (column = 16, height = 460) => {
    if (height >= 260) {
      fillRow(column, height)
      getLeftVerticalBlock(column, height - 25)
    }
  }

  const getRightVerticalBlock = (column = 296, height = 260) => {
    if (height <= 460) {
      fillRow(column, height)
      getRightVerticalBlock(column, height + 25)
    }
  }

  const getHemisphere = () => {
    let yAxis = [
      220, 220, 220,
      190.74, 187.65, 189.10,
      162.60, 157.50, 161.22,
      136.66,
      107.51, 113.93, 131.61, 139.10,
      85.94, 95.28, 111.75,
      58.20, 68.45, 41.80,
      81.42, 55.55, 29.79,
      124.89, 99.26, 72.88, 47.66, 22.46,
      120, 95, 70, 45, 20,
    ]

    let xAxisLeft = [
      16, 40, 64,
      18.77, 44.09, 68.70,
      26.96, 56.08, 82.33,
      40.27,
      31.30, 58.18, 75.15, 103.57,
      52.01, 80, 100,
      47.17, 76, 72.83,
      104.89, 102.54, 100.67,
      130.33, 128.94, 131.91, 130.83, 129.96,
      160, 160, 160, 160, 160,
    ]

    // merge x & y axis into points ie -> [16, 220]
    let leftHemisphere = yAxis.map(
      (point, i) => [xAxisLeft[i], point]
    )

    // mirror the left half of the top hemisphere
    // 360 = width of the svg
    let xAxisRight = xAxisLeft.map(point => 360 - point)

    // reverse the array so seat calculation continues clockwise
    // top to bottom
    let rightHemisphere = yAxis.map(
      (point, i) => [xAxisRight[i], point]
    ).reverse()

    leftHemisphere.forEach(point => fillCircle(point[0], point[1]))
    rightHemisphere.forEach(point => fillCircle(point[0], point[1]))
  }

  // build up seats in clockwise direction from bottom left -> bottom right
  getLeftVerticalBlock()
  getHemisphere()
  getRightVerticalBlock()

  return coordinates
}

export const getOverhangCoordinates = () => {
  let overhangCoordinates = []

  const fillCircle = (x, y, diameter = 20) => (
    overhangCoordinates.push({x, y, diameter})
  )

  let y = 183
  let x = [180, 207, 153, 126, 234, 261, 99]

  x.forEach(point => (
    fillCircle(point, y)
  ))
  return overhangCoordinates
}
