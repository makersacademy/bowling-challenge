$(document).ready(function() {

  var game = new Game();

  $('h1').text("10 Pin Bowling");


  function createTable() {
    var num_rows = 2
    var num_cols = 10
    var theader = '<table id="scores" border="1" width = 800 height=150>\n';
    var tbody = '';


    for( var i=1; i<=num_cols;i++)
    {
      tbody += '<th>';
      tbody += 'Frame ' + i
      tbody += '</th>';
    }


    for( var i=1; i<=num_rows;i++)
    {
      tbody += '<tr>';
      for( var j=1; j<=num_cols;j++)
      {
        tbody += '<td id=Cell' + i + ',' + j + '>';
        tbody += ""
        tbody += '</td>'
      }
      tbody += '</tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
  }


  createTable()

  function fillCell(value, cell) {
    document.getElementById(cell).innerHTML = value
  }

  function getCol() {
    if (game.currentFrame.roll === 0) {
      return game.frame - 1
    } else {
      return game.frame
    }
  }

  function getRow() {
    if (game.currentFrame.roll === 0) {
      return 2
    } else {
      return 1
    }
  }

  $("#sub").click(function () {

    var inputString = $('#points').val();
    var inputInteger = parseInt(inputString)
    game.addPoints(inputInteger)
    fillCell(inputInteger, "Cell" + getRow() + "," + getCol())
  });

});
