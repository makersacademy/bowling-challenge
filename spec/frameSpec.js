describe('Frame', function(){

  beforeEach(function(){
    roll1 = jasmine.createSpyObj("Roll", ["output"]);
    roll2 = jasmine.createSpyObj("Roll", ["output"]);
  });

  it('can sum 2 rolls', function(){
    roll1.output.and.callFake(function() {return [4]} );
    roll2.output.and.callFake(function() {return [3]} );
    var frame = new Frame(roll1, roll2);
    expect(frame.score).toEqual(7);
    expect(frame.spare).toEqual(false);
  });

  it('can assign a spare', function(){
    roll1.output.and.callFake(function() {return [7]} );
    roll2.output.and.callFake(function() {return [3]} );
    var frame = new Frame(roll1, roll2);
    expect(frame.spare).toEqual(true);
  });



});