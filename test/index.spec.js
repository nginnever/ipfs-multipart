/* eslint-env mocha */
'use strict'
const fs = require('fs')

describe('multipart', () => {
  var tests = fs.readdirSync(__dirname)
  tests.filter((file) => {
    if (file === 'index.spec.js' ||
        file === 'parser.spec.js' ||
        file === 'browser.js' ||
        file === 'fixtures') {
      return false
    } else {
      return true
    }
  }).forEach((file) => {
    require('./' + file)
  })
})
