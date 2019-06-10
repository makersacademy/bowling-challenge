$(function() {
  var bsk = new BowlingScorekeeper

  $('#nameBtn').hide();
  $('#nameField').hide();
  $('.gameTile').hide();
  $('#rollScoreField').val("");
  $('#nameField').val("");

  $("#play").click(function() {
    $('.playTile').animate({width: '300px', height: '150px'}, 1000);
    $('#play').hide();
    $('#nameBtn').fadeIn(1000);
    $('#nameField').fadeIn(1000);
  });

  $('#nameBtn').click(function() {
    var name = $('#nameField').val();
    bsk.addName(name);
    // $('#form').find('input:textbox').val('');
    $('.playTile').animate({width: '850px', height: '270px', top: '69%'}, 1000);
    $('#nameBtn').hide();
    $('#nameField').hide();
    $('.gameTile').fadeIn(1000);
    $("#name").text(bsk.name());
    $("#frameNumber").text((bsk._arrayOfFrames.length + 1) + "  ");
    $("#rollNumber").text((bsk._currentFrame.length + 1) + "  ");
  });

  $('#rollScoreBtn').click(function() {
     var rollScoreString = $('#rollScoreField').val();
     var rollScoreNum = parseInt(rollScoreString);
     var acceptableEntries = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     if(!acceptableEntries.includes(rollScoreNum)) {
       return;
     }

     if(bsk._currentFrame.length === 1 && bsk._currentFrame[0] + rollScoreNum > 10) {
       return;
     }

     if(rollScoreString === '10' && bsk._currentFrame.length === 0 && bsk._arrayOfFrames.length < 9) {
       bsk.addRollScore(rollScoreNum);
       var roll1 = $("<td></td>").text(rollScoreNum);
       var roll2 = $("<td></td>").text("X");
       $('.rollRow').append(roll1);
       $('.rollRow').append(roll2);
       $('#rollScoreField').val("");
     } else if(bsk._currentFrame.length === 1 && bsk._currentFrame[0] + rollScoreNum === 10) {
       bsk.addRollScore(rollScoreNum);
       var roll = $("<td></td>").text('/');
       $('.rollRow').append(roll);
       $('#rollScoreField').val("");
     } else if(rollScoreString !== '') {
       bsk.addRollScore(rollScoreNum);
       var roll = $("<td></td>").text(rollScoreNum);
       $('.rollRow').append(roll);
       $('#rollScoreField').val("");
     }

     var score = $("<td colspan='2' ></td>").html(bsk.score());
     if(bsk._currentFrame.length === 0) {
     $('.scoreRow').append(score);
   }
   if(bsk._arrayOfFrames.length <= 9) {
   $("#frameNumber").text((bsk._arrayOfFrames.length + 1) + "  ");
   $("#rollNumber").text((bsk._currentFrame.length + 1) + "  ");
 }

 if(bsk._arrayOfFrames.length === 10) {
 $("#frameNumber").text((bsk._arrayOfFrames.length) + "  ");
 $("#rollNumber").text((bsk._arrayOfFrames[9].length + 1) + "  ");
}

  });




});
