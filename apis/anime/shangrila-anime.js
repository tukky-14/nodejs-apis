// Shangrila Anime API
// Shangrila Anime APIは、アニメの情報を提供するAPIです。このAPIは、アニメのタイトル、放送年、クールを使用してアニメの情報を取得することができます。
// https://note.com/akb428/n/n2362a0e1b6af

const axios = require('axios');

async function getAnimeByYearAndCour(year, cour) {
    try {
        const response = await axios.get(
            `https://anime-api.deno.dev/anime/v1/master/${year}/${cour}`
        );
        console.log(`Anime list for ${year} year, ${cour} cour:`);
        response.data.forEach((anime) => {
            console.log(`Title: ${anime.title}, Public URL: ${anime.public_url}`);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// 例として2021年の1クール目（冬）のアニメを取得
getAnimeByYearAndCour(2021, 1);
