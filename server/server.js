// The main server file
// This sets up and executes the backbone of the server.
// Sets up the middle ware, being express. Also imports paths, port, and handlebars

const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const PORT = process.env.PORT || 3000;

// Import routing module
const setupRoutes = require('./routing');

// Set up Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Static public folder (NOTE: this is ONLY used for CSS! pdfs will NOT be served here.)
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
setupRoutes(app);

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
