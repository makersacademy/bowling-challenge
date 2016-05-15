$(document).ready(function() {
  var bowling = new Bowling()

  $("button").click(function() {
    bowling.knockDown(+this.value)
    var idOfTable = bowling.incrementTableCell(+this.value)
    $("#" + idOfTable).text(+this.value)
    $("#totalScore").text(bowling.calculateTotal())
  })

})
