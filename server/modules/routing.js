/**
 * Router.js
 * 
 * Custom Module designed to handle all the server routing
 * 
 * What is handled by routing.js:
 */

const fs = require("fs")
const path = require("path");
const pdf_validate = require('./pdf_validate');
const pdf_discovery = require('./pdf_discovery');
const retPDF = require("./pdf_discovery");
const PDF_DIR = path.join(__dirname, '..', 'pdfs'); //Need to go one up to see the pdfs directory

// Takes app as a parameter (Express instance)
function setupRoutes(app) {

    // Home page
    app.get('/', (req, res) => {
        res.render('main');
    });

    // Home page (main version)
    app.get('/main', (req, res) => {
        res.render('main');
    });

    // PDF listing page
    app.get('/pdf_page', (req, res) => {
        const pdfs_list = retPDF(PDF_DIR);
        res.render('pdf_page', { pdfs_list });
    });

    // PDF serving
    app.get('/pdf/:name', (req, res) => {
        const pdfName = req.params.name;
        const result = pdf_validate(pdfName, PDF_DIR);

        if (!result.ok) {
            return res.status(404).send("PDF Not Found");
        }

        res.sendFile(result.fullPath);
    });

    // Catch-all 404 page
    app.use((req, res) => {
        res.status(404).render('404', { title: '404 - Not Found' });
    });
}

module.exports = setupRoutes;