$( document ).ready(function() {

  $( "#submitPins" ).click(function() {
    var numberOfPins = $( "#enterPins" ).val();
    $( "#score" ).append( numberOfPins );
    $( "#enterPins" ).val("");
  });

});
