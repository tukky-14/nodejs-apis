// Poke API
// ポケモンの情報を取得する
// https://pokeapi.co/

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
