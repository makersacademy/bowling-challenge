describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('can record a frame one', function(){
    expect(frame.frameOne).toBeDefined();
  });

  it('frameOne can take scores', function(){
    frame.frameOne(5, 5);
    expect(frameOneInfo[0]).toEqual(5);
  });

  it('frameOne can also record a strike', function(){
    frame.frameOne(10, 0);
    expect(frameOneInfo[2]).toEqual('strike');
  });

  it('frameOne does not record a strike if the first score is not a 10', function(){
    frame.frameOne(5, 5);
    expect(frameOneInfo[2]).not.toEqual('strike');
  });

  it('frameOne records a strike if the first score is a 10', function(){
    frame.frameOne(10, 0);
    expect(frameOneInfo[2]).toEqual('strike');
  });

  it('frameOne can record a spare if the first score is not 10 but the total is 10', function(){
    frame.frameOne(1, 9);
    expect(frameOneInfo[2]).toEqual('spare');
  });

});
