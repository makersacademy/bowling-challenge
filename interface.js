$(document).ready(function() {
    var bowling = new Bowling ();
    
    updateCount();
    
  
    $("#round-scores").on('click', function() {
      var score1 = $('#bowl1').val();
      var score2 = $('#bowl2').val();
      var score3 = $('#bowl3').val();
      if (bowling._count < 10) {
        bowling.addTurn([score1, score2])
      }else{
        bowling.addTurn([score1, score2, score3])
      }
      updateCount();
      updateTable();
    });
    
    $("#reset").on('click', function() {
      bowling.reset()
      deleteTable();
      updateCount();
    });

  
    
  // $('#roundcount').on('click', function() {
  //   updateCount();
  // });
  function myTot(total, num) {
    return total + num;
  };

  function updateCount() {
    $('#roundcount').text(bowling._count);
  };
  
  function deleteTable() {
    var Parent = document.getElementById("myTable");
      while(Parent.hasChildNodes())
      {
        Parent.removeChild(Parent.firstChild);
      }
    };

  function updateTable() {
      var x = document.createElement("TABLE");
      x.setAttribute("id", "myTable");
      document.body.appendChild(x);

      var y = document.createElement("TR");
      y.setAttribute("id", "myTr");
      document.getElementById("myTable").appendChild(y);
      
      var z = document.createElement("TD");
      var i = document.createTextNode($('#bowl1').val() + "-");
      var t = document.createTextNode($('#bowl2').val()+ ":");
      var r = document.createTextNode(bowling._score);
      z.appendChild(i);
      z.appendChild(t);
      z.appendChild(r);
      document.getElementById("myTr").appendChild(z);
    }
  
     
});
  
    // Update score method like update temperature 
    
    // access count and stuff