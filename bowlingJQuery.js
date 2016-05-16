$(document).ready(function() {
  var bowling = new Bowling()

  function buttonClick(buttonValue) {
    bowling.knockDown(buttonValue)
    var idOfTable = bowling.incrementTableCell(buttonValue)
    $("#" + idOfTable).text(buttonValue)
    $("#totalScore").text(bowling.calculateTotal())
    sendGameToServer(buttonValue)
  }

  function sendGameToServer(pins) {
    var url = "http://localhost:4567/pins"

    $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data:{frames:bowling.frames()},
        success: function(data){
          console.log(data)
        },
        error: function(error){
          console.log(error)
        }
    })
  }

  function getGameFromServer() {
    var url = "http://localhost:4567/pins"
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function(data){
          console.log(data.frames)
          inputPreviousGameInfo(data)
        },
        error: function(error){
          console.log(error)
        }
    })
  }

  function inputPreviousGameInfo(data) {
    for(var i = 0; i <= data.frames.length; i++) {

    }
  }

  getGameFromServer()

  $("button").click(function() {
    buttonClick(+this.value)
  })



})
