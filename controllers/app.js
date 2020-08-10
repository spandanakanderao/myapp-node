const axios = require('axios');
// const envConfig = require('dotenv').config().parsed;

async function getList(req, res) {
    // const { URL, POSTS_PATH } = envConfig;
    try {
        const postsList = await axios.get('http://jsonplaceholder.typicode.com/posts');
        return res.json({ status: true, code: 200, message: 'List Found', list: postsList.data})
    } catch (error) {
        return res.json({ status: false, code: 404, message: 'List Not Found', list: []})
    }
}

const getUserData = {
    getList
}

module.exports = getUserData;