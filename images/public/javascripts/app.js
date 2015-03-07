$(document).ready(function(){

  $('#submit-button').on('click', function(event){
    event.preventDefault();
    $('#results').text(pubNamer.generate());
  });

});
