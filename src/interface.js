$( document ).ready(function(){
  $("#reset").hide();
  var game = new Game;
  let strike = (roll1) => {
    if(roll1 == "10"){
      return true;
    }
  }

  let total = (roll1, roll2) => {
    var tot = parseInt(roll1) + parseInt(roll2);
    if (tot > 10 ){
      return true;
    }
    else {
      return false;
    }
  }
// Hide roll 2 for frame 1, if roll 1 is a strike
  $( "#f1roll1" ).change(function( event ) {
    var f1roll1 = $("#f1roll1").val();
    if (strike(f1roll1) == true){
      $("#f1roll2").hide();
      $("#l1r2").hide();
      game.roll(parseInt(f1roll1));
    }
    if (f1roll1 == ""){
      alert("Please enter a value for frame 1, roll 1")
    }
    });
  // Alert the user if the total of their rolls is more than 10
  $( "#f1roll2" ).change(function( event ) {
    var f1roll1 = $("#f1roll1").val();
    var f1roll2 = $("#f1roll2").val();
    if (total(f1roll1, f1roll2) == true){
      alert("The sum of your two rolls cannot exceed 10")
      $("#f1roll1").val("1");
      $("#f1roll2").val("1");
    }
    else if (f1roll2 == ""){
      alert("Please enter a value for frame 1, roll 2")
    }
    else {
      game.roll(parseInt(f1roll1), parseInt(f1roll2));
    }
    });

  // Hide roll 2 for frame 2, if roll 1 is a strike
  $( "#f2roll1" ).change(function( event ) {
    var f2roll1 = $("#f2roll1").val();
    if (strike(f2roll1) == true){
      $("#f2roll2").hide();
      $("#l2r2").hide();
      game.roll(parseInt(f2roll1));
    }
    if (f2roll1 == ""){
      alert("Please enter a value for frame 2, roll 1")
    }
    });
  // Alert the user if the total of their rolls is more than 10
    $( "#f2roll2" ).change(function( event ) {
      var f2roll1 = $("#f2roll1").val();
      var f2roll2 = $("#f2roll2").val();
      if (total(f2roll1, f2roll2) == true){
        alert("The sum of your two rolls cannot exceed 10")
        $("#f2roll1").val("1");
        $("#f2roll2").val("1");
      }
      else if (f2roll2 == ""){
        alert("Please enter a value for frame 2, roll 2")
      }
      else {
        game.roll(parseInt(f2roll1), parseInt(f2roll2));
      }
      });

// Hide roll 2 for frame 3, if roll 1 is a strike
  $( "#f3roll1" ).change(function( event ) {
    var f3roll1 = $("#f3roll1").val();
    if (strike(f3roll1) == true){
      $("#f3roll2").hide();
      $("#l3r2").hide();
      game.roll(parseInt(f3roll1));
    }
    if (f1roll3 == ""){
      alert("Please enter a value for frame 3, roll 1")
    }
    });
// Alert the user if the total of their rolls is more than 10
  $( "#f3roll2" ).change(function( event ) {
    var f3roll1 = $("#f3roll1").val();
    var f3roll2 = $("#f3roll2").val();
    if (total(f3roll1, f3roll2) == true){
      alert("The sum of your two rolls cannot exceed 10")
      $("#f3roll1").val("1");
      $("#f3roll2").val("1");
    }
    else if (f3roll2 == ""){
      alert("Please enter a value for frame 3, roll 2")
    }
    else {
      game.roll(parseInt(f3roll1), parseInt(f3roll2));
    }
    });
  // Hide roll 2 for frame 4, if roll 1 is a strike
  $( "#f4roll1" ).change(function( event ) {
    var f4roll1 = $("#f4roll1").val();
    if (strike(f4roll1) == true){
      $("#f4roll2").hide();
      $("#l4r2").hide();
      game.roll(parseInt(f4roll1));
    }
    if (f4roll1 == ""){
      alert("Please enter a value for frame 4, roll 1")
    }
    });
  // Alert the user if the total of their rolls is more than 10
    $( "#f4roll2" ).change(function( event ) {
      var f4roll1 = $("#f4roll1").val();
      var f4roll2 = $("#f4roll2").val();
      if (total(f4roll1, f4roll2) == true){
        alert("The sum of your two rolls cannot exceed 10")
        $("#f4roll1").val("1");
        $("#f4roll2").val("1");
      }
      else if (f4roll2 == ""){
        alert("Please enter a value for frame 4, roll 2")
      }
      else {
        game.roll(parseInt(f4roll1), parseInt(f4roll2));
      }
      });
// Hide roll 2 for frame 5, if roll 1 is a strike
  $( "#f5roll1" ).change(function( event ) {
    var f5roll1 = $("#f5roll1").val();
    if (strike(f5roll1) == true){
      $("#f5roll2").hide();
      $("#l5r2").hide();
      game.roll(parseInt(f5roll1));
    }
    if (f5roll1 == ""){
      alert("Please enter a value for frame 5, roll 1")
    }
    });
// Alert the user if the total of their rolls is more than 10
  $( "#f5roll2" ).change(function( event ) {
    var f5roll1 = $("#f5roll1").val();
    var f5roll2 = $("#f5roll2").val();
    if (total(f5roll1, f5roll2) == true){
      alert("The sum of your two rolls cannot exceed 10")
      $("#f5roll1").val("1");
      $("#f5roll2").val("1");
    }
    else if (f5roll2 == ""){
      alert("Please enter a value for frame 5, roll 2")
    }
    else {
      game.roll(parseInt(f5roll1), parseInt(f5roll2));
    }
    });
// Hide roll 2 for frame 6, if roll 1 is a strike
  $( "#f6roll1" ).change(function( event ) {
    var f6roll1 = $("#f6roll1").val();
    if (strike(f6roll1) == true){
      $("#f6roll2").hide();
      $("#l6r2").hide();
      game.roll(parseInt(f6roll1));
    }
    if (f6roll1 == ""){
      alert("Please enter a value for frame 6, roll 1")
    }
    });
// Alert the user if the total of their rolls is more than 10
  $( "#f6roll2" ).change(function( event ) {
    var f6roll1 = $("#f6roll1").val();
    var f6roll2 = $("#f6roll2").val();
    if (total(f6roll1, f6roll2) == true){
      alert("The sum of your two rolls cannot exceed 10")
      $("#f6roll1").val("1");
      $("#f6roll2").val("1");
    }
    else if (f6roll2 == ""){
      alert("Please enter a value for frame 6, roll 2")
    }
    else {
      game.roll(parseInt(f6roll1), parseInt(f6roll2));
    }
    });
// Hide roll 2 for frame 7, if roll 1 is a strike
  $( "#f7roll1" ).change(function( event ) {
    var f7roll1 = $("#f7roll1").val();
    if (strike(f7roll1) == true){
      $("#f7roll2").hide();
      $("#l7r2").hide();
      game.roll(parseInt(f7roll1));
    }
    if (f7roll1 == ""){
      alert("Please enter a value for frame 7, roll 1")
    }
    });
// Alert the user if the total of their rolls is more than 10
  $( "#f7roll2" ).change(function( event ) {
    var f7roll1 = $("#f7roll1").val();
    var f7roll2 = $("#f7roll2").val();
    if (total(f7roll1, f7roll2) == true){
      alert("The sum of your two rolls cannot exceed 10")
      $("#f7roll1").val("1");
      $("#f7roll2").val("1");
    }
    else if (f7roll2 == ""){
      alert("Please enter a value for frame 7, roll 2")
    }
    else {
      game.roll(parseInt(f7roll1), parseInt(f7roll2));
    }
    });
// Hide roll 2 for frame 8, if roll 1 is a strike
  $( "#f8roll1" ).change(function( event ) {
    var f8roll1 = $("#f8roll1").val();
    if (strike(f8roll1) == true){
      $("#f8roll2").hide();
      $("#l8r2").hide();
      game.roll(parseInt(f8roll1));
    }
    if (f8roll1 == ""){
      alert("Please enter a value for frame 8, roll 1")
    }
    });
// Alert the user if the total of their rolls is more than 10
  $( "#f8roll2" ).change(function( event ) {
    var f8roll1 = $("#f8roll1").val();
    var f8roll2 = $("#f8roll2").val();
    if (total(f8roll1, f8roll2) == true){
      alert("The sum of your two rolls cannot exceed 10")
      $("#f8roll1").val("1");
      $("#f8roll2").val("1");
    }
    else if (f8roll2 == ""){
      alert("Please enter a value for frame 8, roll 2")
    }
    else {
      game.roll(parseInt(f8roll1), parseInt(f8roll2));
    }
    });
// Hide roll 2 for frame 9, if roll 1 is a strike
  $( "#f9roll1" ).change(function( event ) {
    var f9roll1 = $("#f9roll1").val();
    if (strike(f9roll1) == true){
      $("#f9roll2").hide();
      $("#l9r2").hide();
      game.roll(parseInt(f9roll1));
    }
    if (f9roll1 == ""){
      alert("Please enter a value for frame 9, roll 1")
    }
    });
// Alert the user if the total of their rolls is more than 10
  $( "#f9roll2" ).change(function( event ) {
    var f9roll1 = $("#f9roll1").val();
    var f9roll2 = $("#f9roll2").val();
    if (total(f9roll1, f9roll2) == true){
      alert("The sum of your two rolls cannot exceed 10")
      $("#f9roll1").val("1");
      $("#f9roll2").val("1");
    }
    else if (f9roll2 == ""){
      alert("Please enter a value for frame 9, roll 2")
    }
    else {
      game.roll(parseInt(f9roll1), parseInt(f9roll2));
    }
    });
// Check if the user is correctly inputting frame 10
  $( "#f10roll2" ).change(function( event ) {
    var f10roll1 = $("#f10roll1").val();
    var f10roll2 = $("#f10roll2").val();
    if (f10roll1 != 10){
      if(total(f10roll1, f10roll2) == true){
        alert("The sum of your two rolls cannot exceed 10")
        $("#f10roll1").val("1");
        $("#f10roll2").val("1");
      }
      else if (f10roll1 == ""){
        alert("Please enter a value for frame 10, roll 1")
      }
      else if(f10roll2 == ""){
        alert("Please enter a value for frame 10, roll 2")
      }
    }
    if (f10roll1 != 10 && (parseInt(f10roll1) + parseInt(f10roll2) < 10)){
      $("#f10roll3").hide();
      $("#l10r3").hide();
      game.roll(parseInt(f10roll1), parseInt(f10roll2));
    }
  });
  $( "#f10roll3" ).change(function( event ) {
    var f10roll1 = $("#f10roll1").val();
    var f10roll2 = $("#f10roll2").val();
    var f10roll3 = $("#f10roll3").val();
    if(f10roll3 == ""){
      alert("Please enter a value for frame 10, roll 3")
    }
    if (f10roll1 == 10){
      if (f10roll2 != 10){
        if(total(f10roll2, f10roll3) == true){
          alert("The sum of your final two rolls cannot exceed 10");
          $("#f10roll2").val("1");
          $("#f10roll3").val("1");
        }
      }
    }
    game.roll(parseInt(f10roll1), parseInt(f10roll2), parseInt(f10roll3));
    console.log(game);
  });
  $( "#go" ).click(function() {
    $("header").hide();
    $("#l1r1").hide();
    $("#l1r2").hide();
    $("#f1roll1").hide();
    $("#f1roll2").hide();
    $("#l2r1").hide();
    $("#l2r2").hide();
    $("#f2roll1").hide();
    $("#f2roll2").hide();
    $("#l3r1").hide();
    $("#l3r2").hide();
    $("#f3roll1").hide();
    $("#f3roll2").hide();
  //  $("#l4r1").hide();
    $("#l4r2").hide();
    $("#f4roll1").hide();
    $("#f4roll2").hide();
    //$("#l5r1").hide();
    //$("#l5r2").hide();
    $("#f5roll1").hide();
    $("#f5roll2").hide();
    $("#l6r1").hide();
    $("#l6r2").hide();
    $("#f6roll1").hide();
    $("#f6roll2").hide();
    $("#l7r1").hide();
    $("#l7r2").hide();
    $("#f7roll1").hide();
    $("#f7roll2").hide();
    $("#l8r1").hide();
    $("#l8r2").hide();
    $("#f8roll1").hide();
    $("#f8roll2").hide();
    $("#l9r1").hide();
    $("#l9r2").hide();
    $("#f9roll1").hide();
    $("#f9roll2").hide();
    $("#l10r1").hide();
    $("#l10r2").hide();
    $("#l10r3").hide();
    $("#f10roll1").hide();
    $("#f10roll2").hide();
    $("#f10roll3").hide();
    $("#go").hide();
    $("#reset").show();
    $('#l4r1').text("Your score is:")
    console.log(game.gameScore.reduce((a, b) => a + b, 0));
    console.log(game.gameScore);
    $('#l5r1').text(game.gameScore.reduce((a, b) => a + b, 0));
    $('#l5r2').text(game.gameScore);
  });
  $( "#reset" ).click(function() {
    location.reload()
  });

});



//   $('#power_mode').text(thermostat.getPowerSave())
// });
//
// $('#temperature').text(thermostat.temperature);
// if(thermostat.energyUse() === "low-usage"){
//   $('.dot').css("background-color", "green");
// }
// $( "#cities" ).change(function() {
//     let city = $("#cities").val();
