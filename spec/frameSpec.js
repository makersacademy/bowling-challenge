describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  })

  describe("Points", function(){
    it("can be a maximum of 10", function(){
      expect(frame.MAX_POINTS).toEqual(10);
    })
  })

  describe("Rolls", function(){
    it("can be a maximum of 2", function(){
      expect(frame.MAX_ROLLS).toEqual(2);
    })
  })







})
