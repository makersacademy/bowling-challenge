$(document).ready(function() {

  var game = new Game();

  $('h1').text("10 Pin Bowling");


  $("#sub").click(function () {

    var input = $('#points').val();
    var frame = new Frame();

    frame.addPoints(input)

    var $row = $('<tr>'+
          '<td>'+ "Frame" + game.frame +'</td>'+
          '</tr>');


      // $row.append("hello")

      if (frame.roll === 2) {
        $row.append('<td>' + frame.score[0] + '</td>')
      } else {
        $row.find("td:last").after('<td>'+ frame.score[1] + '</td>')
      }



          // $row.append('<td>'+ "hello"+'</td>');

      $('table> tbody:last').append($row);



  })








})
