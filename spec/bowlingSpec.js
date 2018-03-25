describe('Bowling', function(){
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();

  });


it('zero points at the beginning of the game', function(){
  expect(bowling.pointsPerRoll).toEqual([]);
});

it('gutter game', function(){
  for (var i = 0; i < 20; i ++) {
    bowling.roll(0);
  }
  expect(bowling.pointsPerRoll).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // expect(bowling.calculateScore()).toEqual([0]);

  })


it('player can score a strike', function(){
  bowling.roll(10);
  bowling.roll(3);
  bowling.roll(5);
  expect(bowling.pointsPerRoll).toEqual([10, 3, 5]);
  // expect(bowling.calculateScore()).toEqual(18);

})








});
