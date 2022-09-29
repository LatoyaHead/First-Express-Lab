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

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
  const {total, tipPercentage} = req.params
  let tip = (tipPercentage / 200) * total
  res.send(`Tip: ${tip}`)
})

//Magic 8 Ball
app.get('/magic/:question', (req, res) => {
  const {question} = req.params
  const ballResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
  let index = Math.floor(Math.random() * ballResponse.length())
  res.send(`<h1>${question} ${ballResponse[index]}</h1>`)
})

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})