import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Parliament" />
      <div className='mainWrapper' style={{ flexDirection: 'column' }}>
        <p><a href='https://www.youtube.com/watch?v=pljoleVHFug'>MMP: a video introduction</a></p>
        <p>party colours sourced from wikipedia: <a href='https://en.wikipedia.org/wiki/List_of_political_parties_in_New_Zealand'>list of political parties in new zealand</a></p>
        <p>it's like the official elections nz <a href='https://elections.nz/stats-and-research/mmp-seat-allocation-calculator/'>MMP seat allocation calculator</a>, but prettier!</p>
        <p>how do party vote percentages become seats in parliament? <a href='https://thespinoff.co.nz/politics/14-09-2017/mmp-maths-how-party-vote-percentages-become-seats-in-parliament/'>the spinoff tells you how</a>.</p>
      </div>
    </Layout>
  )
}

export default IndexPage
