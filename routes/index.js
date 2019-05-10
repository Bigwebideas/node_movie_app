const express = require("express");
const request = require("request");
const router = express();
const {GET_POPULAR_MOVIES, GET_POPULAR_TV_SHOWS,GET_POSTER_PATH} = require('../config/api');

const GET_MERGED_REQUEST = {};

router.get('/', (req, res) => {
    request(GET_POPULAR_MOVIES, (error,response) => {
        const parseResults = JSON.parse(response.body);
        GET_MERGED_REQUEST['movies'] = parseResults.results;
    })
    request(GET_POPULAR_TV_SHOWS, (error,response) => {
        const parseResults = JSON.parse(response.body);
        GET_MERGED_REQUEST['tv'] = parseResults.results;
        res.render("index", {list_movies:GET_MERGED_REQUEST.movies, list_tv_shows:GET_MERGED_REQUEST.tv, poster_path:GET_POSTER_PATH});
    })
})

module.exports = router;