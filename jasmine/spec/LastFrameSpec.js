describe("LastFrame", function() {

  var lastframe

  beforeEach(function(){

    lastframe = new LastFrame

  });

  describe("Upon instantiating", function() {

    it("is defined", function() {
      expect(lastframe).toBeDefined();
    });

  });
});
