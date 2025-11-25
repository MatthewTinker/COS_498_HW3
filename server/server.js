// The main server file
// This sets up and executes the backbone of the server.
// Sets up the middle ware, being express. Also imports paths, port, and handlebars

//Require statements
const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const { router } = require('./modules/router')

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Static public folder (NOTE: this is ONLY used for CSS! pdfs will NOT be served here.)
app.use(express.static(path.join(__dirname, 'public')));


//Homepage route
app.get('/', (req, res) => {
    res.render('main');
});

//Homepage route
app.get('/main', (req, res) => {
    res.render('main');
});

//Route the pdf pages
app.use('/pdf_page', router);
app.use('/pdf', router);

//404 rendering
app.use((req, res) => {
    res.status(404).render('404');
});


// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
