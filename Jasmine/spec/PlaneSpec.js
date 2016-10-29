describe('Plane', function () {
    var airport = new Airport ();
    var plane = new Plane ();

  it ('has landed', function () {
    plane.landPlane()
    expect(plane.isLanded).toEqual(true);
  });
  it ('has taken off', function () {
    plane.takesOff()
    expect(plane.isLanded).toEqual(false);
  });
});
