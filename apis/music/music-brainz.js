// Music Brainz
// 曲の情報を取得

const axios = require('axios');

async function getRequest() {
    try {
        const { data } = await axios.get(
            'https://musicbrainz.org/ws/2/recording?query=artist:Oasis%20AND%'
        );
        console.log(data);
        // const titleList = data.recordings.map((recording) => recording.title);
        // console.log(titleList);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
