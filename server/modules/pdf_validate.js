/**
 * Custom Module pdf_validate
 * 
 * Used to validate a pdf as "valid", meaning it exists in the pdf directory
 * Takes pdfName and it's directory. Afterwards, checks to see if the two exist. If they don't,
 * it will throw a 404 error. Else, returns true, signaling the routing module to proceed.
 * 
 */

const fs = require('fs');
const path = require('path');

function validatePDF(pdfName, pdfDirectory) {

    // Build full path to the file inside the directory
    const fullPath = path.join(pdfDirectory, pdfName);

    // Check if the file exists
    if (!fs.existsSync(fullPath)) {
        return {
            ok: false,
            status: 404,
            error: "PDF not found"
        };
    }

    //Returns a true if everything passess, signaling routing to proceed.
    return {
        ok: true,
        fullPath
    };
}

module.exports = validatePDF;