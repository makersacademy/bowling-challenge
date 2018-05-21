describe('FrameInterface', function () {
  it('should call Frame', function () {
    var cSpy = spyOn(window, 'Frame')
    FrameInterface()
    expect(cSpy).toHaveBeenCalled()
  })
})