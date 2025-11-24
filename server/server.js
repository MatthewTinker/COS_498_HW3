const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const PORT = process.env.PORT || 3000;



// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));



app.get('/', (req, res) => {
    res.render('main');
});
app.get('/main', (req, res) => {
    res.render('main');
});



app.post('/main', (req, res) => {
})
 


// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
