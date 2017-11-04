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
