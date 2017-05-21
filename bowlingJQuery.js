$(document).ready(function() {
  var bowling = new Bowling()

  function buttonClick(buttonValue) {
    if (bowling.isPermittedValue(buttonValue)) {
      bowling.knockDown(buttonValue)
      var idOfTable = bowling.incrementTableCell(buttonValue)
      $("#" + idOfTable).text(buttonValue)
      $("#totalScore").text(bowling.calculateTotal())
      sendGameToServer(bowling.rolls())
    } else {
      alert("You can't score more than 10 per frame!")
    }
  }

  function sendGameToServer(rolls) {
    $.post("http://localhost:4567/pins?rolls=" + rolls)
  }

  function getGameFromServer() {
    $.ajax({
      type: "GET",
      url: "http://localhost:4567/pins",
      dataType: "html",
      success: function(rolls_array){
        var array
        if (rolls_array === "nil") {
          array = []
        } else {
          array = rolls_array.split(",")
        }
        inputPreviousGameInfo(array)
      },
    })
  }

  function inputPreviousGameInfo(rolls_array) {
    rolls_array.forEach(function(entry) {
      buttonClick(Number(entry))
    })
  }

  getGameFromServer()

  $("button").click(function() {
    buttonClick(+this.value)
  })

  $("#resetButton").click(function() {
    sendGameToServer("nil")
    location.reload()
  })

})
