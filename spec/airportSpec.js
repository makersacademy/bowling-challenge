describe("Airport", function() {

  beforeEach(function() {
    ap = new Airport();
  });

  it("will return true when .has_space called and no planes in hangar", function() {
    expect(ap.has_space()).toEqual(true);
  });

  it("Will have an object in the hangar after .land_plane called", function() {
    ap.land_plane("totally a plane");
    expect(ap.planes_in_hangar.length).toEqual(1);
  })

  it("Will have object removed from the hangar after .takeoff called", function() {
    ap.land_plane("totally a plane");
    ap.takeoff_plane("totally a plane");
    expect(ap.planes_in_hangar.length).toEqual(0); 
  })

  it("Will return false when .has_space called and 20 planes in hangar, after default setup", function() {
    for (var i = 0; i < 20; i++) {
      ap.land_plane("a plane");
    };
    expect(ap.has_space()).toEqual(false);
  });

  it("Will randomly return a boolean when .good_weather called", function() {
    expect(ap.good_weather()).toBeInstanceOf(Boolean);
  });

});
