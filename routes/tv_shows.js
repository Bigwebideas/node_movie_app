const express = require("express");
const request = require("request");
const router = express();
const {GET_POPULAR_TV_SHOWS, GET_POSTER_PATH} = require('../config/api');

router.get('/', (req, res) => {
    request(GET_POPULAR_TV_SHOWS, (error,response) => {
        const parseResults = JSON.parse(response.body);
        res.render("tv_shows", {list_tv_shows:parseResults.results, poster_path:GET_POSTER_PATH});
    })
})

module.exports = router;