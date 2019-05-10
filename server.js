const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5020;

const PublicFolder = path.join(__dirname,'/public');
const ViewsFolder = path.join(__dirname,'/views');

app.use(express.static(PublicFolder));
app.set('views', ViewsFolder);
app.set('view engine','ejs');

// app.get('/', (req, res) => {
//     res.render('index');
// })
app.use('/', require('./routes/index'));
app.use('/movies', require('./routes/movies'));
app.use('/tv_shows', require('./routes/tv_shows'));

app.listen(PORT, () => {
    console.log(`Web Server is running successfully on Port ${PORT}`)
})