/**
 * Router.js
 * 
 * Custom Module designed to handle all the server routing
 * 
 * This includes simple pages such as the main page or /, the pdf page, as well as the error page.
 * This includes passing a list of pdfs to the pdf page in order to display them, and validating them.
 */

const path = require("path");
const pdf_validate = require('./pdf_validate');
const retPDF = require('./pdf_discovery');

const PDF_DIR = path.join(__dirname, '..', 'pdfs');

function setupRoutes(app) {
    app.get('/', (req, res) => {
        res.render('main');
    });
    app.get('/main', (req, res) => {
        res.render('main');
    });
    app.get('/pdf_page', (req, res) => {
        res.render('pdf_page');
    });

    app.get('/main', (req, res) => {
        res.render('main');
    });

    app.get('/pdf_page', (req, res) => {
        const pdfs_list = retPDF(PDF_DIR);
        res.render('pdf_page', { pdfs_list });
    });

    app.get('/pdf/:name', (req, res) => {
        const pdfName = req.params.name;
        const result = pdf_validate(pdfName, PDF_DIR);

        if (!result.ok) {
            return res.status(404).send("PDF Not Found");
        }

        res.sendFile(result.fullPath);
    });

    app.use((req, res) => {
        res.status(404).render('404');
    });
}

module.exports = setupRoutes;