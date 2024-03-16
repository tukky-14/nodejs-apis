// When is the next MCU film?
// MCU APIは、次のMCU映画の公開日を提供するAPIです。このAPIは、次のMCU映画の公開日を取得することができます。
// https://whenisthenextmcufilm.com

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://whenisthenextmcufilm.com/api');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
