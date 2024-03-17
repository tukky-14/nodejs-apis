// 郵便番号検索API
// 郵便番号から住所を取得する
// https://zipcloud.ibsnet.co.jp

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=1000001');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
