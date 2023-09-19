const env = require('dotenv').config();
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api-american-football.p.rapidapi.com/players?team=23&season=2023',
  headers: {
    'X-RapidAPI-Key': `${process.env.API_KEY}`,
    'X-RapidAPI-Host': 'api-american-football.p.rapidapi.com',
    "content-type": "application/json"
  }
};

const fetchFootballTeam = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

module.exports = {fetchFootballTeam}