// // window.onload = function() {
// //   alert("Welcome, Ellie & Kenny!");
// // };
// // (done) upButton
// // (done) downButton
// // (done) powerSaving
// // (done) reset
// // currentUsage
// // going over the max
// // going past the min
//
// $( document ).ready(function() {
//   var thermostat = new Thermostat();
//
//   $("a").addClass( "test" );
//
//
//   $("a").click(function(event){
//     event.preventDefault();
//     $(this).fadeOut("slow");
//   });
//
//   $("#degrees").text(thermostat.temperature);
//
//   $("#upButton").click(function() {
//     thermostat.up(1);
//     $("#degrees").text(thermostat.temperature);
//   });
//
//   $("#downButton").click(function(){
//     thermostat.down(1);
//     $("#degrees").text(thermostat.temperature);
//   });
//
//   $("#resetButton").click(function(){
//     thermostat.reset();
//     $("#degrees").text(thermostat.temperature);
//   });
//
//   $("#powerSaving").click(function(){
//     thermostat.togglePowerSaving();
//     console.log(thermostat.isPowerSavingOn)
//     // if powerSavingOn is toggled
//     // when yes, -> the
//   });
// });
