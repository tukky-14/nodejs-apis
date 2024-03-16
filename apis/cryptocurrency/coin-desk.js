// CoinDesk
// ビットコイン価格指数

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
