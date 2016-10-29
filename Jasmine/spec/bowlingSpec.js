describe ('Bowling', function (){
  var bowling = new Bowling ();

  it ("starts with a score of 0", function () {
    expect(bowling.score).toEqual(0);
  });

  it ("starts with an empty object listing all the frames", function () {
    expect(bowling.framesList).toBeObject()
  });
});
