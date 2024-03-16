// Disney API
// Disney APIは、ディズニーキャラクターの情報を提供するAPIです。このAPIは、ディズニーキャラクターの名前、画像、説明を取得することができます。
// https://api.disneyapi.dev/

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://api.disneyapi.dev/character');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
