describe("feature test", function(){ "use strict";

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });


  it("Has an initial frame number of 1", function(){
    expect(bowling._frame).toEqual(1);
  });

  it("Has an initial roll number of 1", function(){
    expect(bowling._roll).toEqual(1);
  });

  it("Has an initial score of 0", function(){
    expect(bowling._score).toEqual(0);
  });

  it("bowl method calls dependant functions", function(){
    spyOn(bowling, "pinsKnockdown");
    bowling.bowl()
    expect(bowling.pinsKnockdown).toHaveBeenCalled();
  });

});
