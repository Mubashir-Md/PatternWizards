const axios = require('axios');

const apiKey = 'at_Ct6z8d1M4zLMQbIH37EV44JG1IOnu';
const domainToCheck = 'ibm.com';

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
