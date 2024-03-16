// Dogs
// Stanford Dogsデータセットに基づく犬API
// https://dog.ceo/dog-api/

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://dog.ceo/api/breeds/image/random');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
