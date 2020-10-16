import React from 'react'
import { Switch, Route } from 'react-router-dom'

/*
// Firebase app initialization with config file
import firebase from 'firebase/app'
import firebaseConfig from 'your-firebase-config-path'
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig)
*/

import styles from './styles.css'

import Home from './pages/home'
import NotFound from './pages/404'

export default class App extends React.Component {
  render () {
    return <div className={styles.app}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  }
}
