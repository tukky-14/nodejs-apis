// RandomDog
// 犬のランダムな写真
// https://random.dog/woof.json

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://random.dog/woof.json');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
