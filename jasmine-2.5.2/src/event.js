$( document ).ready(function() {
  var bowling = new Bowling();
  $( '#addScore' ).click(function() {
    bowling.addRow(parseInt($('#scoreBox').val()));
    writeValues();
    $('#scoreBox').val(0);
    bowling.endOfRowProcessing();
  });

  function writeValues() {
    $("table").append("<tr>" +
    "<td>" + bowling.getFrame() + "</td>" +
    "<td>" + bowling.getRoll() + "</td>" +
    "<td>" + bowling.getHits() + "</td>" +
    "<td>" + bowling.getBonus() + "</td>" +
    "<td>" + bowling.getStrikeOrSpare() + "</td>" +
    "<td>" + bowling.getRunningTotal() + "</td>" +
    "</tr>");
  };
});
