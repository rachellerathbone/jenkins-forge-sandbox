const express = require('express')
const app = express()
const port = 3000

const badFuncCall = () => {
  try {
    // Your test here
    throw new Error("build fail")
  } catch (e) {
    error("Something bad happened. Failing this build.")
  }
}

app.get('/', (_, res) => {
  badFuncCall();
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
