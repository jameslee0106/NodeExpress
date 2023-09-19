const express = require('express');
const { fetchFootballTeam } = require('./footballservice');
const app = express()
const port = 4000;

//This is an API / Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hamburgers', (req, res) => {
  // Get data from database
  res.send('hamburgers cheese!')
})

app.get('/jsonjsonjson', (req, res) => {
  res.status(404).json({"hello": "world"})
})

app.get('/jsonjsonjson', (req, res) => {
  res.status(404).json({"hello": "world"})
})


//hitting other services 
app.get('/football', async (req, res) => {
  const data = await fetchFootballTeam();
  res.json(data);
} )

//opens server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})