$(document).ready(function() {
    var bowling = new Bowling ();
    
    updateCount();
    
    $("#round-scores").on('click', function() {
    
      var score1 = parseInt($('#bowl1').val(), 10);
      var score2 = parseInt($('#bowl2').val(), 10);
      var score3 = parseInt($('#bowl3').val(), 10);

      if (roundNineCheck(bowling._scorecard)){
        bowling.addTurn([score1, score2, score3])
       } else {
        bowling.addTurn([score1, score2])
      };
      
      updateCount();
      updateTable();
    });
    
    $("#reset").on('click', function() {
      bowling.reset()
      deleteTable();
      updateCount();
      $( "form" ).empty();
    });

  function myTot(total, num) {
    return total + num;
  };

  function roundNineCheck(array) {
    if (((array.length == 9) && ((array[array.length - 1].reduce(myTot)) % 10 === 0))&& (array[array.length - 1].reduce(myTot) != 0)){
      return true
    }
  };


  function updateCount() {
    $('#roundcount').text(bowling._count);
    if (roundNineCheck(bowling._scorecard)) {
      $('form').append(' <h3> Tenth round Third Bowl <select id="bowl3"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value=10>X</option></select> </h3>')
   } else if (bowling._count == 'FINITO') {
     $('form').append(' <h1> FINAL SCORE <span id="tot"></span></h1>')
     $('form').append('<h2 color=blue >Accumulating Score <span id="list"></span></h2>')
   };
  };
  
  function deleteTable() {
    var Parent = document.getElementById("myTable");
      while(Parent.hasChildNodes())
      {
        Parent.removeChild(Parent.firstChild);
      }
    };

  function updateTable() {
      $('#tot').text(bowling._score);
      $('#list').text(bowling._accumulatingScoreArray);
      var x = document.createElement("TABLE");
      x.setAttribute("id", "myTable");
      document.body.appendChild(x);

      var y = document.createElement("TR");
      y.setAttribute("id", "myTr");
      document.getElementById("myTable").appendChild(y);
      
      var z = document.createElement("TD");
      var i = document.createTextNode($('#bowl1').val() + "-");
      var t = document.createTextNode($('#bowl2').val()+ ":");
      // var r = document.createTextNode(bowling._score);
      z.appendChild(i);
      z.appendChild(t);
      // z.appendChild(r);
      document.getElementById("myTr").appendChild(z);
    }
    
});
  
    // Update score method like update temperature 
    
    // access count and stuff