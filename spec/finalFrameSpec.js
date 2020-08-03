describe('Final Frame', function() {
  var frame

  beforeEach(function() {
    afm = function() {}
    frame = new FinalFrame(afm, FinishStates)
  })

  it('is an instance of Frame', function() {
    expect(frame).toBeInstanceOf(Frame)
  })

  it('has a final method', function() {
    expect(frame.final()).toEqual('final')
  })
})