/* eslint-disable @typescript-eslint/no-var-requires */
const { queryParser } = require('../dist/index')
const express = require('express')
const app = express()

app.use(
  queryParser({
    parseNull: true,
    parseBoolean: true,
    parseNumber: true,
  })
)

app.get('/', (req, res) => {
  res.send(req.query)
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
  console.log('Try http://localhost:3000/?a=null&b=true&c[d]=null')
  console.log('Try http://localhost:3000/?a[0]=null&a[1]=true')
  console.log('Try http://localhost:3000/?a[0]=3.1415926&a[1]=3&a[2]=A.3')
})