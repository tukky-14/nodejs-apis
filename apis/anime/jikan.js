const axios = require('axios');

/**
 * アニメのタイトルを使用してMyAnimeListのAPIを検索する関数
 * @param {*} title
 * @returns
 */
async function searchAnimeByTitle(title) {
    try {
        const response = await axios.get(
            `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}&limit=1`
        );
        if (response.data.data.length > 0) {
            const anime = response.data.data[0];
            return anime.mal_id;
        } else {
            console.log('No anime found with that title.');
            return null;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

/**
 * MyAnimeListのアニメIDを使用して情報を取得する関数
 */
async function getAnimeDetails(animeTitle) {
    try {
        const animeId = await searchAnimeByTitle(animeTitle);

        // Jikan APIのアニメ詳細エンドポイントにリクエストを送る
        const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`);

        // 取得したアニメの情報をコンソールに表示
        console.log('Title:', response.data.data.title);
        console.log('Synopsis:', response.data.data.synopsis);
        console.log('Episodes:', response.data.data.episodes);
        console.log('Score:', response.data.data.score);
        // 他にも多くの情報が取得できます
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

getAnimeDetails('進撃の巨人');
