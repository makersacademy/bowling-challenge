describe('frame', function(){

  beforeEach(function(){
    frame = new Frame();
    bowl = new Bowl();
  })

  it('starts with an empty array', function(){
    expect(frame.outcome).toEqual([])
  });

  it('testing spy function', function(){
    spyOn(bowl, 'roll').and.returnValue(8);
    expect(bowl.roll()).toBe(8)
  });

  xit('saves the rolls', function(){
    spyOn(bowl, 'roll').and.returnValue(8);
    frame.start()
    expect(frame.outcome).toContain(8)
  });

  it('saves the second roll', function(){
    frame.start()
    frame.second()
    expect(frame.outcome.length).toBe(2)
  });
})
