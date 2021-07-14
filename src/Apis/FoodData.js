import axios from 'axios';
const KEY ='vcnEwkhp9PtSE/ViKeD9Og==iSfwc9vV8YjWbrbD';
  
let query = term;
  

var query = '3lb carrots and a chicken sandwich'
$.ajax({
    method: 'GET',
    url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
    headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

export default axios.create({
  baseURL: 'https://api.calorieninjas.com/v1/nutrition?query=',
  params: {
      part: 'snippet',
      type: 'video',
      maxResults: 15,
      key: KEY
  }
});