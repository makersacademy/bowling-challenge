$( document ).ready(function() {

  $('.titles').text("hehehhe");

  $('#add_place_button').click(function() {
    $('.form').attr('class', 'visible_form')
  });

  $('#add_user_button').click(function() {
    $('.form2').attr('class', 'visible_form')
  });

  $('#log_in_button').click(function() {
    $('.form3').attr('class', 'visible_form')
  });

});
