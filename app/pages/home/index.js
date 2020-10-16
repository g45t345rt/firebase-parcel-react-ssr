import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../components/card'

function randId (chars, length) {
  const keys = chars.split('')
  let str = ''
  for(let i =0;i<length;i++) {
    const k = Math.round(Math.random() * (keys.length-1))
    str += keys[k]
  }

  return str
}

export default (props) => <Card>
  <h1>Home page</h1>
  <div>If you see this page you have been successfull in running the boilerplater.</div>
  <Link to={`/${randId('abcdefg', 10)}`}>404 example</Link>
</Card>