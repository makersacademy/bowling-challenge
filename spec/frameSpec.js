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
