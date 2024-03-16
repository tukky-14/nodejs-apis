// Open Library
// 様々な図書館の本、本の表紙および関連データ
// https://openlibrary.org/developers/api

const axios = require('axios');

async function getRequest(authorName) {
    try {
        const response = await axios.get(
            `https://openlibrary.org/search.json?author=${encodeURIComponent(authorName)}`
        );
        console.log(`Search results for books by ${authorName}:`);
        console.log(response.data);
        response.data.docs.forEach((doc) => {
            console.log(`Title: ${doc.title}, Author: ${doc.author_name.join(', ')}`);
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

getRequest('村上春樹'); // ここでは「村上春樹」を例としています。
