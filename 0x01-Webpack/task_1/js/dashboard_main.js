import $ from "jquery";

$(document).ready(function(){
  let count = 0
  function updateCounter() {
      count ++;
      $('#count').html(`${counter} clicks on the button`);
  }
  
  $('body').append('<p>Holberton Dashboard</p>')
  $('body').append('<p>Dashboard data for the students</p>')
  $('body').append('<button>Click here to get started</button>')
  $('body').append("<p id='count'></p>")
  $('body').append('<p>Copyright - Holberton School</p>')
  
  $('button').on('click', _.debounce(updateCounter, 500));
})
