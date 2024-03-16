// RandomFox
// キツネのランダムな写真
// https://randomfox.ca/floof/

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://randomfox.ca/floof/');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
