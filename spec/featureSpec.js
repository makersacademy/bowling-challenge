describe("Feature", function() {

  var airport1;

  beforeEach(function() {
    airport1 = new Airport();
    airport2 = new Airport();
    airport3 = new Airport();
    plane1 = new Plane();
    plane2 = new Plane();
    plane3 = new Plane();
    plane4 = new Plane();
    plane5 = new Plane();

    spyOn(airport1, 'good_weather').and.returnValue(true);
    spyOn(airport2, 'good_weather').and.returnValue(true);
    spyOn(airport3, 'good_weather').and.returnValue(true);
  });

  it("Return value of Airport#good_weather can be controlled with a spy", function() {
    expect(airport1.good_weather()).toEqual(true);
  });

  it("Five planes are landed and taken off from two seperate airports and then all landed at a third", function() {
    plane1.land(airport1);
    plane2.land(airport1);
    plane3.land(airport2);
    plane4.land(airport2);
    plane5.land(airport2);

    plane1.take_off(airport1);
    plane2.take_off(airport1);
    plane3.take_off(airport2);
    plane4.take_off(airport2);
    plane5.take_off(airport2);

    plane1.land(airport3);
    plane2.land(airport3);
    plane3.land(airport3);
    plane4.land(airport3);
    plane5.land(airport3);

    expect(airport1.planes_in_hangar.length).toEqual(0);
    expect(airport2.planes_in_hangar.length).toEqual(0);
    expect(airport3.planes_in_hangar.length).toEqual(5);

    expect(plane1.airport).toEqual(airport3);
    expect(plane2.airport).toEqual(airport3);
    expect(plane3.airport).toEqual(airport3);
    expect(plane4.airport).toEqual(airport3);
    expect(plane5.airport).toEqual(airport3);
  });


});
