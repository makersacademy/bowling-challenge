describe("Frame", function(){

  beforeEach(function(){
    testFrame = new Frame();
  });

  describe('variables', function(){

    it('has a score array', function(){
      expect(testFrame.score).toBeDefined();
    });

  });

});
