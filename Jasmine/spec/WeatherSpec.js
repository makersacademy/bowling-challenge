describe('Weather', function () {
  var weather = new Weather ();

  it ('should define if the weather is stormy', function () {
    spyOn(weather, 'isStormy').and.returnValue(true)
    expect(weather.isStormy()).toEqual(true)
  });
});
