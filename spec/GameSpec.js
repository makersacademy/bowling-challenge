describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();

    frame1 = {
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

    frame2 = {
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

  });

  it ('can play a frame', function() {
    game.playFrame(frame1)
    expect(game.Frames).toContain(frame1);
    expect(game.rolls).toContain(10);
    expect(game.rolls).toContain(null);
  });

  it ('can recognize the next frame', function() {
    game.playFrame(frame1);
    game.playFrame(frame2);
    expect(game.nextFrame(frame1)).toEqual(frame2);
  });

  it ('can calculate result of a frame', function() {
    game.playFrame(frame1)
    game.playFrame(frame2)
    expect(game.frameResult(frame1)).toEqual(18);
    expect(game.frameResult(frame2)).toEqual(8);
    // expect(game.result()).toEqual(26);
  });


});