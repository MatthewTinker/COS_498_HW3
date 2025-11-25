/**
 * Router.js
 * 
 * Custom Module designed to handle all the server routing related to pdfs
 * 
 * This module allows the user to access a list of the pdfs, as well as see a specific pdf/download it.
 */


const express = require('express');
const path = require("path");
const pdf_validate = require('./pdf_validate');
const retPDF = require('./pdf_discovery');

const PDF_DIR = path.join(__dirname, '..', 'pdfs');

const router = express.Router();


//To render the pdf page, the list of pdf's is passed into render
router.get('/', (req, res) => {
    const pdfs_list = retPDF(PDF_DIR);
    res.render('pdf_page', { pdfs_list });
});

router.get('/:name', (req, res) => {
    const pdfName = req.params.name;
    const result = pdf_validate(pdfName, PDF_DIR);

    if (!result.ok) {
        return res.status(404).send("PDF Not Found");
    }

    res.sendFile(result.fullPath);
});


module.exports = { router };