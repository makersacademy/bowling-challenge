describe("Javabuzz", function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe("Knows if number is", function(){
    it('divisible by 3', function(){
      expect(javabuzz._isDivisibleBy(3, 3)).toBe(true);
    });

    it('is not divisible by 3', function(){
      expect(javabuzz._isDivisibleBy(17, 3)).toBe(false);
    });
  });

  describe("When playing", function(){
    it('"Java" when divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when divisible by 5', function(){
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"JavaBuzz" when divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual("JavaBuzz");
    });
  });

});
