import React from 'react'
import useStyles from '../../plugins/custom-mui-theme/theme/custom'
export const CalculatorInstructions = () => {
  const { calculatorInstructions } = useStyles()
  let xBase = 85
  return (
    <text
      x={xBase}
      y={160}
      className={calculatorInstructions}
    >
      <tspan x={xBase + 48} dy={'1.2em'}>
        calculator!
      </tspan>
      <tspan x={xBase + 27} dy={'2.4em'}>
        distribute 100%
      </tspan>
      <tspan x={xBase + 20} dy={'1.2em'}>
        of the party votes
      </tspan>
      <tspan x={xBase + 7} dy={'1.2em'}>
        between the parties
      </tspan>
      <tspan x={xBase} dy={'1.2em'}>
        & add electorate seats
      </tspan>
      <tspan x={xBase + 7} dy={'1.2em'}>
        won, to see how many
      </tspan>
      <tspan x={xBase} dy={'1.2em'}>
        seats each party would
      </tspan>
      <tspan x={xBase + 80} dy={'1.2em'}>
        get.
      </tspan>
      <tspan x={xBase + 27} dy={'2.4em'}>
        electorate seats
      </tspan>
      <tspan x={xBase + 40} dy={'1.2em'}>
        mostly affect
      </tspan>
      <tspan x={xBase + 20} dy={'1.2em'}>
        parties with fewer
      </tspan>
      <tspan x={xBase + 7} dy={'1.2em'}>
        than 5% of the votes.
      </tspan>
    </text>
  )
}
