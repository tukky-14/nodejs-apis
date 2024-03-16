// JSONPlaceholder
// テストとプロトタイピングのための偽のデータ
// http://jsonplaceholder.typicode.com/

// /posts       100 posts
// /comments    500 comments
// /albums      100 albums
// /photos      5000 photos
// /todos       200 todos
// /users       10 users

const axios = require('axios');

async function getRequest() {
    let response;
    try {
        response = await axios.get('http://jsonplaceholder.typicode.com/posts');
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getRequest();
