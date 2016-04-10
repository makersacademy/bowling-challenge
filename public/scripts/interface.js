$( document ).ready(function() {

  $( "#submitPins" ).click(function() {
    var numberOfPins = $( "#enterPins" ).val();
    $( "#score" ).append( numberOfPins );
    $( "#enterPins" ).val("");
    // $( "input[name*='']" ).val( "has man in it!" );
  });

});
