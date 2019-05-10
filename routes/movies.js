const express = require("express");
const request = require("request");
const router = express();
const {GET_POPULAR_MOVIES, GET_POSTER_PATH} = require('../config/api');

router.get('/', (req, res) => {
    request(GET_POPULAR_MOVIES, (error,response) => {
        const parseResults = JSON.parse(response.body);
        res.render("movies", {list_movies:parseResults.results, poster_path:GET_POSTER_PATH});
    })
})

module.exports = router;