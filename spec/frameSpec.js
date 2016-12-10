describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  })

  describe("Points", function(){
    it("are a maximum of 10", function(){
      expect(frame.MAX_POINTS).toEqual(10);
    })
  })







})
