import { createElement } from 'react'
import * as functions from 'firebase-functions'
import express from 'express'
import { renderToStaticMarkup } from 'react-dom/server'

import ServerApp from '../app/server'
import template from './template'

const app = express()

app.get('*', (req, res) => {
  const context = {}
  const element = createElement(ServerApp, { url: req.url, context })
  const body = renderToStaticMarkup(element)

  const { statusCode } = context
  const html = template({ body })
  res.status(statusCode || 200).send(html)
})

export let server = functions.https.onRequest(app)