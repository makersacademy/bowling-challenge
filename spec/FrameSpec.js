describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(0)
  })

  it('has a frame property', function() {
    expect(frame.viewFrame(0)).toEqual({roll1: 0, roll2: 0, total: 0, type: ""})
  }) 

  it('sets roll1 score, total score, and roll type', function() {
    var frame1;
    frame1 = new Frame(1)
    expect(frame1.viewFrame()).toEqual({roll1: 1, roll2: 0, total: 1, type: ""})
  })

  it('sets roll1 score, total score, and roll type - strike', function() {
    var frame2;
    frame2 = new Frame(10)
    expect(frame2.viewFrame()).toEqual({roll1: 10, roll2: 0, total: 10, type: "strike"})
  })

  it('creates frame with 3 rolls in 10th frame', function() {
    var frame = new Frame(1, 10)
    expect(frame.viewFrame()).toEqual({roll1: 1, roll2: 0, roll3: 0, total: 1, type: ''})
  })


})