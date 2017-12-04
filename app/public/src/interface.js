$(document).ready(function() {

  var frame = [];
  var scoresheet = new ScoreSheet();

  $("#roll-button").click(function () {
    var roll = parseInt($("#roll").val());
    if(frame.length < 2) {
      frame.push(new Roll(roll))
      if(frame[0].getKnockedPins() === 10 ) {
        console.log(1)
        frame.push(new Roll(0))
        scoresheet.addFrame(new Frame(frame[0],frame[1]));
        $("#current_score").html(scoresheet.calculateScore())
        frame = []
      }
      if(frame.length === 2) {
        console.log(2)
        scoresheet.addFrame(new Frame(frame[0],frame[1]));
        $("#current_score").html(scoresheet.calculateScore())
        frame = []
      }
    }
  });

//   $("#score-button").click(function() {
//     var f1r1;
//     var f1r2;
//     var f2r1;
//     var f2r2;
//     var f3r1;
//     var f3r2;
//     var f4r1;
//     var f4r2;
//     var f5r1;
//     var f5r2;
//     var f6r1;
//     var f6r2;
//     var f7r1;
//     var f7r2;
//     var f8r1;
//     var f8r2;
//     var f9r1;
//     var f9r2;
//     var f10r1;
//     var f10r2;
//     var f11r1;
//     var f11r2;
//     var f12r1;
//     var f12r2;
//     if($("#f1r1").val() !== "") {
//       var f1r1 = new Roll($("#f1r1").val())
//     };
//     if($("#f1r2").val() !== "") {
//       var f1r2 = new Roll($("#f1r2").val())
//       var f1 = new Frame (f1r1, f1r2)
//     };
//     if($("#f2r1").val() !== "") {
//       var f2r1 = new Roll($("#f2r1").val())
//     };
//     if($("#f2r2").val() !== "") {
//       var f2r2 = new Roll($("#f2r2").val())
//       var f2 = new Frame (f2r1, f2r2)
//     };
//     if($("#f3r1").val() !== "") {
//       var f3r1 = new Roll($("#f3r1").val())
//     };
//     if($("#f3r2").val() !== "") {
//       var f3r2 = new Roll($("#f3r2").val())
//       var f3 = new Frame (f3r1, f3r2)
//     };
//     if($("#f4r1").val() !== "") {
//       var f4r1 = new Roll($("#f4r1").val())
//     };
//     if($("#f4r2").val() !== "") {
//       var f4r2 = new Roll($("#f4r2").val())
//       var f4 = new Frame (f4r1, f4r2)
//     };
//     if($("#f5r1").val() !== "") {
//       var f5r1 = new Roll($("#f5r1").val())
//     };
//     if($("#f5r2").val() !== "") {
//       var f5r2 = new Roll($("#f5r2").val())
//       var f5
//     };
//     if($("#f6r1").val() !== "") {
//       var f4r1 = new Roll($("#f6r1").val())
//     };
//     if($("#f6r2").val() !== "") {
//       var f6r2 = new Roll($("#f6r2").val())
//     };
//     if($("#f7r1").val() !== "") {
//       var f4r1 = new Roll($("#f7r1").val())
//     };
//     if($("#f7r2").val() !== "") {
//       var f7r2 = new Roll($("#f7r2").val())
//     };
//     if($("#f8r1").val() !== "") {
//       var f8r1 = new Roll($("#f8r1").val())
//     };
//     if($("#f8r2").val() !== "") {
//       var f8r2 = new Roll($("#f8r2").val())
//     };
//     if($("#f9r1").val() !== "") {
//       var f9r1 = new Roll($("#f9r1").val())
//     };
//     if($("#f9r2").val() !== "") {
//       var f9r2 = new Roll($("#f9r2").val())
//     };
//     if($("#f10r1").val() !== "") {
//       var f10r1 = new Roll($("#f10r1").val())
//     };
//     if($("#f10r2").val() !== "") {
//       var f10r2 = new Roll($("#f10r2").val())
//     };
//     if($("#f11r1").val() !== "") {
//       var f11r1 = new Roll($("#f11r1").val())
//     };
//     if($("#f11r2").val() !== "") {
//       var f11r2 = new Roll($("#f11r2").val())
//     };
//     if($("#f12r1").val() !== "") {
//       var f12r1 = new Roll($("#f12r1").val())
//     };
//     if($("#f12r2").val() !== "") {
//       var f12r2 = new Roll($("#f12r2").val())
//     };
//   })
});
