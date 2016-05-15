$(document).ready(function() {
  var bowling = new Bowling()

  $("button").click(function() {
    bowling.knockDown(+this.value)
    $("#totalScore").text(bowling.calculateTotal())
    var idOfTable = bowling.tableCell(+this.value)
    $("#" + idOfTable).text(+this.value)
  })

})
