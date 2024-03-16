// Loripsum
// ダミーテキストを生成する
// https://loripsum.net/

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://loripsum.net/api/1/short/headers');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
