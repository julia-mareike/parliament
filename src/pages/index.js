import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './index.css'

const IndexPage = () => {
  console.log('ᕕ( ᐛ )ᕗ')
  return (
    <Layout>
      <SEO title="Parliament" />
      <div className='mainWrapper rowWrapper' style={{ flexDirection: 'column' }}>
        <div>
          <a href='https://thespinoff.co.nz/politics/14-09-2017/mmp-maths-how-party-vote-percentages-become-seats-in-parliament/'>what? -> words</a>
        </div>
        <div>
          <a href='https://www.youtube.com/watch?v=pljoleVHFug'>huh? -> video</a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
