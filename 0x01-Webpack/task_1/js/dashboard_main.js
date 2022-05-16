import $ from "jquery";
const _ = require('lodash');

$(document).ready(function(){
  let count = 0
  function updateCounter() {
      count ++;
      $('#count').html(`${count} clicks on the button`);
  }
  
  $('body').append('<p>Holberton Dashboard</p>')
  $('body').append('<p>Dashboard data for the students</p>')
  $('body').append('<button>Click here to get started</button>')
  $('body').append("<p id='count'></p>")
  $('body').append('<p>Copyright - Holberton School</p>')
  
  $('button').on('click', _.debounce(updateCounter, 500));
})
