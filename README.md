# COS_498_HW3
HW3

# Setup
Before explaining the structure and function of the website, the first steps were to obtain a domain and secure it with SSL. The domain was purchased from GoDaddy, and configured to accept digital ocean nameservers. DNS records were set up for DigitalOcean to connect the domain name and ip together. 

After this, SSL certificates were setup through lets encrypt and NGINX proxy setup. The process was simple and straightforwards. After this was completed, the website was good to begin programming/actually setting up.

## Modules

### Routing

### PDF Discovery and Validation

## Data Storage
Done with simple .json files. Each pdf has a corresponding .json file, with the title and a very brief description about the contents of the pdf itself.

Format is the following: {"title": "some_title", "description":"some_description"}
