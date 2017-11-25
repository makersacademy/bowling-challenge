describe('Bowling', function () {
  var bowling

  beforeEach(function () {
    bowling = new Bowling()
    frame = jasmine.createSpyObj('frame', ['first', 'second', 'rolls', 'strike', 'spare'])
  })

  it('should add to the list of frames', function () {
    bowling.addFrame('frame')
    expect(bowling.frames).toContain('frame')
  })
  it('should only add max 10 frames', function () {
    for (var i = 1; i <= 10; i++) { bowling.addFrame('frame') }
    expect(function () { bowling.addFrame('frame') }).toThrow('Max Frames Added')
  })
})
