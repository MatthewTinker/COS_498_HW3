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
const PDF_DIR = path.join(__dirname, 'pdfs');

// Takes app as a parameter (Express instance)
function setupRoutes(app) {

    // Home page route
    app.get('/', (req, res) => {
        res.render('main');
    });

    // Redirect to home page
    app.get('/main', (req, res) => {
        res.render('main');
    });

    // PDF page
    app.get('/pdf_page', (req, res) => {
        const pdfs_list = retPDF(PDF_DIR);
        res('pdf_page', { pdfs_list});
    });

    // PDF serving route
    app.get('/pdf/:name', (req, res) => {
        const pdfName = req.params.name;
        const result = validatePDF(pdfName, PDF_DIR);

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