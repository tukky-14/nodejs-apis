const axios = require('axios');

async function searchAnimeByTitle(title) {
    try {
        const response = await axios.get(
            `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(title)}&limit=1`
        );
        if (response.data.data.length > 0) {
            const anime = response.data.data[0];
            console.log('Found Anime:', anime.title);
            console.log('Anime ID:', anime.mal_id);
            return anime.mal_id; // さらに詳細情報を取得するために使用できる
        } else {
            console.log('No anime found with that title.');
            return null;
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

searchAnimeByTitle('進撃の巨人');

// // MyAnimeListのアニメIDを使用して情報を取得する関数
// async function getAnimeDetails(animeId) {
//     try {
//         // Jikan APIのアニメ詳細エンドポイントにリクエストを送る
//         const response = await axios.get(`https://api.jikan.moe/v4/anime/${animeId}`);

//         // 取得したアニメの情報をコンソールに表示
//         console.log('Title:', response.data.data.title);
//         console.log('Synopsis:', response.data.data.synopsis);
//         console.log('Episodes:', response.data.data.episodes);
//         console.log('Score:', response.data.data.score);
//         // 他にも多くの情報が取得できます
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// // アニメIDを指定して関数を実行（例：1は「カウボーイビバップ」のID）
// getAnimeDetails(16498);
