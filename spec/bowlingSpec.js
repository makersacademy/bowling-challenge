describe("Bowling", function() {

  beforeEach(function() {
    bowling = new Bowling();
  });

it("has 10 pins before each frame", function(){
  expect(bowling.pins).toEqual(10)
});

it("can knock down pins", function(){
  bowling.roll1(2);
  bowling.roll2(4);
  expect(bowling.pins).toEqual(4);
})

it("can add up score of two shots", function(){
  bowling.roll1(2);
  bowling.roll2(3);
  expect(bowling.score).toEqual(5)
})

it("knows when there is a strike", function(){
  bowling.roll1(10);
  bowling.roll1(10);
  expect(bowling.strikes).toEqual(2)
})

it("knows when there is a spare", function(){
  bowling.roll1(5);
  bowling.roll2(5);
  bowling.roll1(3);
  bowling.roll2(7);
  expect(bowling.spares).toEqual(2);
})

it("knows when a frame is over", function(){
  bowling.roll1(3);
  bowling.roll2(5);
  bowling.roll1(2);
  bowling.roll2(6);
  expect(bowling.frame).toEqual(2)
})

it("cannot have more than 10 frames", function(){
  for (var i = 0; i <= 10; i++) {
    bowling.roll1(3);
    bowling.roll2(2);
  };
    expect( function(){ bowling.roll1(3); }).toThrow(new Error("There are only ten frames"));
})

it("gives 30 points for a strike", function(){
  bowling.roll1(10);
  bowling.roll1(10);
  expect(bowling.score).toEqual(60)
})

it("can be a perfect game", function(){
  for (var i = 0; i < 10; i++) {
    bowling.roll1(10)
  };
  expect(bowling.score).toEqual(300)
})

it("can be a gutter game", function(){
  for (var i = 0; i < 10; i++) {
    bowling.roll1(0);
    bowling.roll2(0);
  };
  expect(bowling.score).toEqual(0)
})

it("can give a score after every round", function(){
  bowling.roll1(6);
  bowling.roll2(3);
  bowling.roll1(2);
  bowling.roll2(4);
  expect(bowling.score).toEqual(15);
})

it("can provide a score when there have been strikes", function(){
  bowling.roll1(10);
  bowling.roll1(10);
  bowling.roll1(3);
  bowling.roll2(3);
  expect(bowling.score).toEqual(66)
})

});
