require('dotenv').config();
const axios = require('axios')
const BASE_URL = 'http://api.giphy.com/v1/gifs/random'
const api_key = process.env.API_KEY;
const express = require('express');


let router = express()

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/random`,
        params: {
            api_key,
            limit: 5,
        }
    }).then(response => {
        console.log(response);
        res.send(response.data.data)

    }).catch(error => {
        console.log('error in random GET request', error);
    })
})

module.exports = router;