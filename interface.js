$(document).ready(function() {
    var bowling = new Bowling ();
    
    updateCount();

  
    $("#round-scores").on('click', function() {
      var score1 = $('#bowl1').val();
      var score2 = $('#bowl2').val();
      bowling.addTurn([score1, score2])
      console.log(bowling._scores)
      updateCount();
    });
  
    
  // $('#roundcount').on('click', function() {
  //   updateCount();
  // });
      
  function updateCount() {
    $('#roundcount').text(bowling._count);
  }
     
});
  
    // Update score method like update temperature 
    
    // access count and stuff