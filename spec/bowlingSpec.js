describe('Bowling', function(){
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();

  });


it('zero points at the beginning of the game', function(){
  expect(bowling.pointsPerRoll).toEqual([]);
});

it('gutter game', function(){
  for (var i = 0; i < 20; i++) {
  bowling.roll(0);
  }
  expect(bowling.calculateScore()).toBe(0);
});

it('the player can score a spare', function(){
  bowling.roll(3);
  bowling.roll(7);
  bowling.roll(6);
  severalRolls(0, 17);
  expect(bowling.calculateScore()).toBe(22);
});

it('the player can score a strike', function(){
  bowling.roll(10);
  bowling.roll(3);
  bowling.roll(5);
  severalRolls(0, 16);
  expect(bowling.calculateScore()).toEqual(26);
})

var severalRolls = function(knockedPins, rolls){
  for (var i = 0; i < rolls; i++){
    bowling.roll(knockedPins);
  }

};



});
