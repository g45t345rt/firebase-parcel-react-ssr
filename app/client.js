import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'normalize.css'
import App from './app'

class ClientApp extends React.Component {
  render () {
    return <BrowserRouter>
      <App />
    </BrowserRouter>
  }
}

ReactDOM.render(<ClientApp />, document.getElementById('root'))
