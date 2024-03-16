// RandomUser
// ランダムのユーザーデータを生成します（画像などの詳細情報もあり）
// https://randomuser.me/documentation

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://randomuser.me/api/');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
