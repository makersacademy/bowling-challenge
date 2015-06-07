describe('Frame', function(){
  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  it('can register a strike', function(){
    frame.bowl(10);
    expect(frame.strike).toEqual(true);
  });

  it('can register a gutter ball', function(){
    frame.bowl(0);
    expect(frame.go1).toEqual(0);
  });

   it('can register 5 pins down', function(){
    frame.bowl(5);
    expect(frame.go1).toEqual(5);
  });

  it('can register 2 bowls', function(){
    frame.bowl(5);
    frame.bowl(3);
    expect(frame.go1).toEqual(5);
    expect(frame.go2).toEqual(3);
  });

  it('1st bowl cannot exceed 10 pins ', function(){

    expect(function(){ frame.bowl(25);}).toThrow('Cannot exceed 10 pins');
  });

  it('2 bowls cannot exceed a total of 10 pins', function(){
    frame.bowl(5);
    expect(function(){ frame.bowl(7);}).toThrow('Cannot exceed 10 pins');
  });

   it('cannot throw after a strike', function(){
    frame.bowl(10);
    expect(function(){ frame.bowl(1);}).toThrow('Cannot exceed 10 pins');
  });
});