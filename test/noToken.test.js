const request = require('supertest')
const express = require('express')

const expressJwt = require('../lib')

describe.only('Testing the middleware in an express app', function() {
  it('should not log errors when not token present', function() {
    const app = express()
    const middleware = expressJwt({secret: 'geheim'})
    app.use(middleware)
    return request(app).get('/').expect(401)
  })
})