describe ('Test', function() {

  describe ('Testing infrastructure', function() {
    it ('is working', function() {
      var test = new Test();
      expect(test.isWorking()).toEqual (true);
    });
  });

});
