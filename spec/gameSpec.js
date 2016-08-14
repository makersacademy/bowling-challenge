describe("Game",function() {
  var game;
  var player;
  beforeEach(function(){
    player = new Player("Jeff");
    game = new Game(player);
  });

  it("has a player", function() {
    expect(game.player).toEqual(player);
  });
  it("has 10 frames",function(){
    expect(game.frames.length).toEqual(10);
    expect(game.frames).toEqual([ Object({ nth: 1, pins: 10, scores: 0 }),
                                  Object({ nth: 2, pins: 10, scores: 0 }),
                                  Object({ nth: 3, pins: 10, scores: 0 }),
                                  Object({ nth: 4, pins: 10, scores: 0 }),
                                  Object({ nth: 5, pins: 10, scores: 0 }),
                                  Object({ nth: 6, pins: 10, scores: 0 }),
                                  Object({ nth: 7, pins: 10, scores: 0 }),
                                  Object({ nth: 8, pins: 10, scores: 0 }),
                                  Object({ nth: 9, pins: 10, scores: 0 }),
                                  Object({ nth: 10, pins: 10, scores: 0 })]);
  });
  it("sums up the total scores",function() {
    game.frames[0].firstRoll(1);
    game.frames[0].secondRoll(2);
    game.countScores();
    expect(game.totalScores).toEqual(3);
  });

  it("adds the bonus of a spare to the frame's scores",function(){
    game.frames[0].firstRoll(5);
    game.frames[0].secondRoll(5);
    game.frames[1].firstRoll(2);
    game.countScores();
    expect(game.frames[0].scores).toEqual(12);
    expect(game.totalScores).toEqual(14);
  });

  it("adds the bonus of a strike to the frame's scores",function(){
    game.frames[0].firstRoll(10);
    game.frames[1].firstRoll(2);
    game.frames[1].secondRoll(3);
    game.countScores();
    expect(game.frames[0].scores).toEqual(15);
    expect(game.totalScores).toEqual(20);
  });

  it("adds the bonus of two strikes in a row to the frames' scores", function() {
    game.frames[0].firstRoll(10);
    game.frames[1].firstRoll(10);
    game.frames[2].firstRoll(3);
    game.frames[2].secondRoll(2);
    expect(game.frames[0].isStrike()).toBe(true);
    expect(game.frames[1].isStrike()).toBe(true);
    game.countScores();
    expect(game.frames[0].scores).toEqual(23);
    expect(game.frames[1].scores).toEqual(15);
  });

  it("can play the perfect game",function(){
    //the iteration through all frames is not working as i+1 is 11 and i+2 is 12 in the end
    game.frames[0].firstRoll(10);
    game.frames[1].firstRoll(10);
    game.frames[2].firstRoll(10);
    game.frames[3].firstRoll(10);
    game.frames[4].firstRoll(10);
    game.frames[5].firstRoll(10);
    game.frames[6].firstRoll(10);
    game.frames[7].firstRoll(10);
    game.frames[8].firstRoll(10);
    game.frames[9].firstRoll(10);
    game.frames[9].secondRoll(10);
    game.frames[9].thirdRoll(10);
    game.countScores();
    expect(game.totalScores).toEqual(300);
  });

  it('can play a perfect spare game',function(){
    game.frames[0].firstRoll(8);
    game.frames[0].secondRoll(2);
    game.frames[1].firstRoll(8);
    game.frames[1].secondRoll(2);
    game.frames[2].firstRoll(8);
    game.frames[2].secondRoll(2);
    game.frames[3].firstRoll(8);
    game.frames[3].secondRoll(2);
    game.frames[4].firstRoll(8);
    game.frames[4].secondRoll(2);
    game.frames[5].firstRoll(8);
    game.frames[5].secondRoll(2);
    game.frames[6].firstRoll(8);
    game.frames[6].secondRoll(2);
    game.frames[7].firstRoll(8);
    game.frames[7].secondRoll(2);
    game.frames[8].firstRoll(8);
    game.frames[8].secondRoll(2);
    game.frames[9].firstRoll(8);
    game.frames[9].secondRoll(2);
    game.frames[9].thirdRoll(10);
    game.countScores();
    expect(game.totalScores).toEqual(182);

  })


})
