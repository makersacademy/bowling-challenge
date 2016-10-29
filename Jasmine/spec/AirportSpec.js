describe('Airport', function () {
    var airport = new Airport ();
    var plane = new Plane ();
    var plane2 = new Plane ();
    var plane3 = new Plane ();

  it ('has a limited capicity of planes', function () {
    expect(airport.capacity).toEqual(2);
  });

  it ('adds landing plane to the list of landed plane', function () {
      spyOn(airport, 'isBadWeather').and.returnValue(false)
      airport.landedPlane(plane)
      expect(airport.listLandedPlanes).toContain(plane)
  });


  it ('confirms a plane has landed', function (){
    expect(airport.confirmsLanded(plane)).toEqual('The plane has landed')
  });

  it ('removes taking off plane from the list of landed plane', function () {
    airport.takenOffPlane(plane)
    expect(airport.listLandedPlanes).not.toContain(plane)
  });

  it ('confirms a plane has taken off', function (){
    expect(airport.confirmsTakeOff(plane)).toEqual('The plane has taken off')
  })

  it ('doesn\'t let a plane to land if it is full', function () {
    spyOn(airport, 'isBadWeather').and.returnValue(false)
    airport.landedPlane(plane);
    airport.landedPlane(plane2);
    airport.landedPlane(plane3);
    expect(function () {airport.fullCapacity()}).toThrow('The airport is full, the plane can\'t land')
  });

  it ('doesn\'t let a plane to land if it has already already landed', function () {
    plane.landPlane ();
    expect(function () {airport.landedPlane(plane)}).toThrow('The plane is already in the airport')
  });

  it ('forbids planes to land if the weather is stormy', function () {
    spyOn(airport, 'isBadWeather').and.returnValue(true)
    expect(function () {airport.landedPlane(plane)}).toThrow('The plane can\'t land due to stormy weather');
  });

  it ('forbids planes to take off if the weather is stormy', function () {
    spyOn(airport, 'isBadWeather').and.returnValue(true)
    expect(function () {airport.takenOffPlane(plane)}).toThrow('The plane can\'t take off due to stormy weather');
  });
});
