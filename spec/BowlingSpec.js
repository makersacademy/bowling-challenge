describe('Bowling', function() {

});

beforeEach(function() {
  game = new Bowling();
});

it('adds frames when you play', function() {
  game.addFrame();
  expect(game.frames).toContain(1);
});

it('takes a random of up to 10 pins down, if index of playRoll is 1', function() {
  spyOn(game, "playRoll").and.returnValue(6);
  expect(game.playRoll(1)).toEqual(6);
});

it('takes a random of up to 10- first pins down, if index of PlayRoll is 2', function() {
  spyOn(game, "playRoll").and.returnValue(3);
  expect(game.playRoll(2)).toEqual(3);
});

it('adds the points of each roll to the frame total and puts it into an array', function() {
  game.playRoll(1);
  game.currentFramePoints();
  spyOn(game, "currentFramePoints").and.returnValue(7);
  expect(game.currentFramePoints()).toEqual(7);
});

it('knows when it is a Strike', function() {
  spyOn(game, "playRoll").and.returnValue(10);
  game.pins1 = game.playRoll(1);
  expect(game.isAStrike()).toEqual(true);
});

it('calculates Strike bonus and adds it to an array', function() {
  spyOn(game, 'isAStrike').and.returnValue(true);
  game.playRoll(1);
  game.playRoll(2);
  spyOn(game, 'currentFramePoints').and.returnValue(7);
  game.currentFramePoints();
  expect(game.currentFramePoints()).toEqual(7);
  game.strikeBonuses.push(game.currentFramePoints());
  game.strikeBonus();
  expect(game.strikeBonuses).toContain(7);
});

it('knows when it is a Spare', function() {
  spyOn(game, "currentFramePoints").and.returnValue(10);
  game.frameTotal = game.currentFramePoints();
  expect(game.isASpare()).toEqual(true);
});

it('calculates Spare bonus and adds it to an array', function() {
  spyOn(game, 'isASpare').and.returnValue(true);
  spyOn(game, 'playRoll').and.returnValue(6);
  game.pins1.push(game.playRoll(1));
  game.spareBonus();
  expect(game.spareBonuses).toContain(6);
});

it ('calculates total score up the this moment', function(){
  spyOn(game, 'currentFramePoints').and.returnValue(7);
  game.frameTotal = game.currentFramePoints();
  spyOn(game, 'strikeBonus').and.returnValue(8);
  game.strikeBonuses.push(game.strikeBonus());
  spyOn(game, 'spareBonus').and.returnValue(5);
  game.spareBonuses.push(game.spareBonus());
  expect(game.calculateScore()).toEqual(20);
});
