$(document).ready(function() {
    var bowling = new Bowling ();
    
    updateCount();

  
    $("#round-scores").on('click', function() {
      bowling.addTurn(["3","4"])
      updateCount();
    });
  
    
  $('#roundcount').on('click', function() {
    updateCount();
  });
      
  function updateCount() {
    $('#roundcount').text(bowling._count);
  }
     
});
  
    // Update score method like update temperature 
    
    // access count and stuff