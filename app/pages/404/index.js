import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../components/card'

export default (props) => {
  const { staticContext } = props
  if (staticContext) staticContext.statusCode = 404
  return <Card>
    <h1>404 - Page not found</h1>
    <div>Example of a 404 error</div>
    <Link to="/">Go back to home page</Link>
  </Card>
}