const express = require('express')
const app = express()
const PORT = 3000

//Greeting 
app.get('/greeting', (req, res) => {
  console.log(req);
  res.send('<h1>Hello, stranger!</h1>')
})
app.get('/greeting/:name', (req, res) => {
  const {name} = req.params
  res.send(`Hello, ${name}! It's so great to see you!`)
})



app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})