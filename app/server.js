import React from 'react'
import { StaticRouter } from 'react-router-dom'

import App from './app'

export default class ServerApp extends React.Component {
  render () {
    const { url, context } = this.props
    return (
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    )
  }
}
