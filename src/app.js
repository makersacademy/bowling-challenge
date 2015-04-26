$(document).ready(function() {

    frames = [new Frame(),new Frame(),new Frame(), new Frame(),new Frame(),new Frame(), new Frame(),new Frame(),new Frame(), new Frame()];
    game = new Game()
    $('#bonus').hide();

    $('.frame').click(function() {
      currentFrame = $(this).attr('id');
      $('.frame').removeClass('frame--selected');
      $(this).addClass('frame--selected');
    });

    $('#calculate_score').click(function() {
        game.addFrames(frames[0],frames[1],frames[2],frames[3],frames[4],frames[5],frames[6],frames[7],frames[8],frames[9]);
        if (frames[10]) { game.frames.push(frames[10])}
      $('#score').text(game.score());
    });

    $('#confirm').click( function() {
      if (currentFrame == "bonus") return updateBonusRolls();
      frames[currentFrame - 1].add_bowl(Number($('#pins_hit').val()));
      updateCurrentFrame();
      ShowBonusRollsIfNeeded();
    });

    var ShowBonusRollsIfNeeded = function() {
      if (currentFrame == "10" && frames[9].knockedDown() === 10) $('#bonus').show();
    };

    var updateCurrentFrame = function() {
      updateFirstRoll(currentFrame);
      updateSecondRoll(currentFrame);
      updateTotal(currentFrame);
    };

    var updateBonusRolls = function() {
      bonusFrame = getBonusFrameOrCreate();
      var final_frame = frames[9];
      if ( final_frame.isSpare() ) bonusFrame.bowled[0] = ( Number( $('#pins_hit').val() ) );
      if ( final_frame.isStrike() ) bonusFrame.add_bowl( (Number( $('#pins_hit').val() ) ) );
      updateBonusFrame();
    };

    var getBonusFrameOrCreate = function() {
      if ( !frames[10] ) frames.push(new Frame());
      return frames[10];
    };

    var updateBonusFrame = function() {
      $("#bonus > .first_roll").text( frames[10].bowled[0] );
      $("#bonus > .second_roll").text( frames[10].bowled[1] );
      $("#bonus > .total").text( frames[10].knockedDown() );
    };

    var updateFirstRoll = function(currentFrame) {
      currentFrameDiv = "#" + currentFrame.toString() + " > .first_roll";
      $(currentFrameDiv).text( frames[currentFrame - 1].bowled[0] );
    };

    var updateSecondRoll = function(currentFrame) {
      currentFrameDiv = "#" + currentFrame.toString() + " > .second_roll";
      $(currentFrameDiv).text( frames[currentFrame - 1].bowled[1] );
    };

    var updateTotal = function(currentFrame) {
      currentFrameDiv = "#" + currentFrame.toString() + " > .total";
      $(currentFrameDiv).text( frames[currentFrame - 1].knockedDown() );
    };

  });
