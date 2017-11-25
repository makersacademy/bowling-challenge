describe('Bowling', function () {
  var bowling

  beforeEach(function () {
    bowling = new Bowling()
  })

  it('should add to the list of frames', function () {
    bowling.addFrame('frame')
    expect(bowling.frames).toContain('frame')
  })
})
