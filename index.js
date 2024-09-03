const express = require('express')
const app = express();

const defaultController = (req, res, next) => {
  console.log(req.query)
  const { name, favoriteColor } = req.query
  res.send(`hello ${name}, your favorite color is ${favoriteColor}!`)
}

app.get('/', defaultController)

const homePage = (req, res, next) => {
  console.log(req)
  res.send('<h1>Home</h1> <p>This is my first server!</p>')
}

app.get('/home', homePage)

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})