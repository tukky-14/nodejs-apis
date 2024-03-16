// Lyrics.ovh
// 曲の歌詞を取得
// https://lyricsovh.docs.apiary.io/

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get(
            'https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime'
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
