// Shibe.Online
// しばいぬ・猫・鳥のランダム写真
// https://shibe.online/

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get(
            'http://shibe.online/api/shibes?count=3&urls=true&httpsUrls=true'
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
