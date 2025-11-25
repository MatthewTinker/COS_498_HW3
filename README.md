# COS_498_HW3
HW3

# Setup
Before explaining the structure and function of the website, the first steps were to obtain a domain and secure it with SSL. The domain was purchased from GoDaddy, and configured to accept digital ocean nameservers. DNS records were set up for DigitalOcean to connect the domain name and ip together. 

After this, SSL certificates were setup through lets encrypt and NGINX proxy setup. The process was simple and straightforwards. After this was completed, the website was good to begin programming/actually setting up.

# Modules

### Routing
Routing is done through a singular module. It uses a single function from both pdf discovery and validation. Routes exist to serve the basic pages, as well as serve the PDF files.

### PDF Discovery and Validation
PDF's are discovered through a single module. This module seeks a specific pdf directory, and then creates a list of all of these pdfs. It will additionally find metadata used for each of the pdf's. Combining both is a helper function that helps protect the functions from being vulnerable

PDF's are validated through a single module. This module verifies it is exists. As the creation/discovery module already forces pdfs, an additional check to verify if the file is actually a pdf is not necessary

### Data Storage
Done with simple .json files. Each pdf has a corresponding .json file, with the title and a very brief description about the contents of the pdf itself.

Format is the following: {"title": "some_title", "description":"some_description"}
