$(document).ready(function() {
  var bowling = new Bowling()

  $("button").click(function() {
    bowling.knockDown(+this.value)
    var idOfTable = bowling.incrementTableCell(+this.value)
    $("#" + idOfTable).text(+this.value)
    $("#totalScore").text(bowling.calculateTotal())
    sendGameToServer(+this.value)
  })

  function sendGameToServer(pins) {
    var url = 'http://localhost:4567/game';
    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: {frames: bowling.frames()},
        success: function(data) {
          console.log(data)
        },
        error: function(){
          console.log()
        },
    })
  }

  function getGameFromServer() {
    var url = 'http://localhost:4567/game';
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data){
          console.log(data)
        },
        error: function(){
          console.log()
        }
    })
  }

  getGameFromServer()

})
