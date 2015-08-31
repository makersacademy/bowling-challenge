describe('Frame', function(){
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe("Play a frame", function () {
    it('registers a strike', function(){
      frame.bowl(10);
      expect(frame.strike).toEqual(true);
    });

    it('registers a gutter ball', function(){
      frame.bowl(0);
      expect(frame.firstThrow).toEqual(0);
    });

     it('registers 5 pins down', function(){
      frame.bowl(5);
      expect(frame.firstThrow).toEqual(5);
    });

    it('registers 2 bowls', function(){
      frame.bowl(5);
      frame.bowl(3);
      expect(frame.firstThrow).toEqual(5);
      expect(frame.secondThrow).toEqual(3);
    });

    it('1st throw cannot exceed 10 pins ', function(){

      expect(function(){ frame.bowl(25);}).toThrow('10 pins only!');
    });

    it('2 throws cannot be more than 10 pins', function(){
      frame.bowl(5);
      expect(function(){ frame.bowl(7);}).toThrow('10 pins only!');
    });

    it('cannot throw after a strike', function(){
      frame.bowl(10);
      expect(function(){ frame.bowl(1);}).toThrow('10 pins only!');
    });
  });
});
