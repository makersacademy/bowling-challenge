describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('can record a frame one', function(){
    expect(frame.frameOne).toBeDefined();
  });

  it('frameOne can take scores', function(){
    frame.frameOne(5, 5)
    expect(frameOneInfo[0]).toEqual(5)
  });

  it('frameOne can also record a strike', function(){
    frame.frameOne(10, 0)
    expect(frameOneInfo[2]).toEqual('strike')
  });


});
