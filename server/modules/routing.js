/**
 * Router.js
 * 
 * Custom Module designed to handle all the server routing
 * 
 * What is handled by routing.js:
 */


    const pdf_validate = require('./pdf_validate');
    const pdf_discovery = require('./pdf_discovery');


    //Handles error's/unwanted routes
    app.use((req, res) => {
        res.status(404).render('404', { title: '404 - Not Found' });
    });