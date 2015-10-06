describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();

    frameStrike = {
      pinsHitByFirstRoll : 10,
      pinsHitBySecondRoll : null,
      isStrike : function(){
       return true},
      isSpare : function(){
        return false},
      play : function(){
        },
      totalHitInFrame : function(){
        return 10},
    };

    frameStrike2 = {
      pinsHitByFirstRoll : 10,
      pinsHitBySecondRoll : null,
      isStrike : function(){
       return true},
      isSpare : function(){
        return false},
      play : function(){
        },
      totalHitInFrame : function(){
        return 10},
    };

    frameRegular = {
      pinsHitByFirstRoll : 5,
      pinsHitBySecondRoll : 3,
      isStrike : function(){
        return false},
      isSpare : function(){
        return false},
      play : function(){},
      totalHitInFrame : function(){
        return 8},
    };

    frameSpare = {
      pinsHitByFirstRoll : 8,
      pinsHitBySecondRoll : 2,
      isStrike : function(){
       return false},
      isSpare : function(){
        return true},
      play : function(){
        },
      totalHitInFrame : function(){
        return 10},
    };

  });

  it ('can play a frame', function() {
    game.playFrame(frameRegular)
    expect(game.Frames).toContain(frameRegular);
  });

  it ('can recognize the next frame', function() {
    game.playFrame(frameStrike);
    game.playFrame(frameRegular);
    expect(game.nextFrame(frameStrike)).toEqual(frameRegular);
  });

  it ('asks to play the next frame to calculate score if spare', function() {
    game.playFrame(frameSpare)
    expect(game.frameResult(frameSpare)).toEqual("Play the next frame");
  });

  it ('asks to play the next frame to calculate score if 2 strikes', function() {
    game.playFrame(frameStrike)
    game.playFrame(frameStrike2)
    expect(game.frameResult(frameStrike)).toEqual("Play the next frame");
  });

  it ('can calculate result of a frame if 1 strike', function() {
    game.playFrame(frameStrike)
    game.playFrame(frameRegular)
    expect(game.frameResult(frameStrike)).toEqual(18);
    expect(game.frameResult(frameRegular)).toEqual(8);
    // expect(game.result()).toEqual(26);
  });

  it ('can calculate result of a frame if 2 strikes', function() {
    game.playFrame(frameStrike)
    game.playFrame(frameStrike2)
    game.playFrame(frameRegular)
    expect(game.frameResult(frameStrike)).toEqual(25);
    expect(game.frameResult(frameStrike2)).toEqual(18);
    expect(game.frameResult(frameRegular)).toEqual(8);
    // expect(game.result()).toEqual(51);
  });

});