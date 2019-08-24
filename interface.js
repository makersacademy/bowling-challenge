$(document).ready(function() {
    var bowling = new Bowling ();
    
    updateCount();

  $("Submit Round 1!").click(function(){
    $("p").html("Hello <b>world</b>!");
  });
    
  $('#roundcount').on('click', function() {
    bowling._count();
    updateCount();
  });
      
  function updateCount() {
    $('#roundcount').text(bowling._count);
  }
     
});
  
    // Update score method like update temperature 
    
    // access count and stuff