/**
 * Custom Module pdf_discovery
 * 
 * Used to discover all pdf's within a directory, being the pdfs directory
 * 
 * Requires: fs (filesystem), and path
 * Scans directory for pdf files. Once a list is obtained, searches for metadata. After this,
 * compiles a list of pdfs and associated metadata. Helper function to get all data without exposing functions.
 */

const fs = require('fs');
const path = require('path');

//Gets a list of the pdf files in the directory
//Takes the current directory as a parameter.
function getPdfList(dir) {

  
    const pdfs = [];

    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (path.extname(file).toLowerCase() === '.pdf') {
            pdfs.push({
            name: file,
            fullPath: path.join(dir, file),
            });
        }
    }

  return pdfs;
}

//Gets the metadata associated with those pdfs
//Takes the current directory as a parameter.
function metadata(dir) {
    const pdfs = getPdfList(dir);
    const results = [];

    for (const pdf of pdfs) {
        const metadataFile = `${pdf.name}.json`;
        const metadataPath = path.join(dir, metadataFile);

        let data = null;

        if (fs.existsSync(metadataPath)) {
            try {
                data = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
            } catch (err) {
                console.warn(`Error reading metadata for ${pdf.name}:`, err);
            }
        }

        results.push({
            ...pdf,
            metadata: data
        });
    }

    return results;
}

//Helper function, designed to get returns WITHOUT exposing unecessary functions.
//Takes the current directory as a parameter.
function retPDF(dir){
    return metadata(dir);
}

module.exports = retPDF;