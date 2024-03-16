// HTTPCat
// HTTPステータスと一緒に猫の画像を返すAPI
// https://http.cat/
// ※以下は404 Not Foundの画像を取得してファイルに保存するソースコード

const axios = require('axios');
const fs = require('fs');

async function getRequest() {
    try {
        const response = await axios.get('https://http.cat/404', { responseType: 'arraybuffer' });
        fs.writeFileSync('404-cat.jpg', response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
