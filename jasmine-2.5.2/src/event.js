$( document ).ready(function() {
  var bowling = new Bowling();
  $( '#addScore' ).click(function(event) {
    event.preventDefault();
    var hits = $('#scoreBox').val();
    console.log(hits);
    bowling.addRow(hits);
    writeValues();
    $('#scoreBox').html("");
    bowling.endOfRowProcessing();
  });

  function writeValues() {
    $("#results").append("<tr>" +
    "<td>" + bowling.getFrame() + "</td>" +
    "<td>" + bowling.getRoll() + "</td>" +
    "<td>" + bowling.getHits() + "</td>" +
    "<td>" + bowling.getBonus() + "</td>" +
    "<td>" + bowling.getStrikeOrSpare() + "</td>" +
    "<td>" + bowling.getRunningTotal() + "</td>" +
    "</tr>");
  };
});
