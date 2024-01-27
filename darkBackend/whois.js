const axios = require('axios');

require('dotenv').config();

const apiKey = process.env.WHOIS_KEY;

const domainToCheck = 'ibm-ds.com';

// WHOISXMLAPI endpoint URL
const endpointUrl = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${apiKey}&domainName=${domainToCheck}&outputFormat=JSON`;

// Make a GET request using Axios
axios.get(endpointUrl)
  .then(response => {
    // Handle the response data here
    console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
