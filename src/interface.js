"use strict";

$(document).ready(function() {

  var scorecard = new Scorecard();
  
  function updateTotal() {
    $("total").text(scorecard.total);
  }

  $("#pins").click(function() {
    scorecard.total();
    $("total").text(scorecard.total);
  });

});