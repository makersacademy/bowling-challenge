describe ("Each Frame", function() {
  var frame;
});

beforeEach(function(){
  frame = new Frame();
});

  it ("has a bowl method which adds a ball's score to the bowls array", function() {
    frame.bowl(3);
    expect(frame.bowl.length).toEqual(1);
  });

  it ("throws an error if the score input is more than 10", function() {
    expect(function(){frame.bowl(11);}).toThrowError("The maximum number of pins for one roll is 10");
  });

  it ("throws an error if the total of both bowls is more than 10", function() {
    frame.bowl(6);
    expect(function(){frame.bowl(5);}).toThrowError("Two bowls can only knock down 10 pins");
  });

  it ("identifies if a frame is a strike", function() {
  frame.bowl(10);
  expect(frame.isStrike()).toBe(true);
  });

  it ("identifies if a frame is a spare", function() {
  frame.bowl(4);
  frame.bowl(6);
  expect(frame.isSpare()).toBe(true);
  });

  it ("identifies if a frame is an openframe", function() {
    frame.bowl(1);
    frame.bowl(2);
    expect(frame.isOpenFrame()).toBe(true);
  });

  it ("has a function which states when the frame is over", function(){
    frame.bowl(1);
    frame.bowl(2);
    expect(frame.isOver()).toBe(true);
  });

  it ("has a function to calculate the score of a frame", function() {
    frame.bowl(1);
    frame.bowl(2);
    expect(frame.score()).toEqual(3);
  });
