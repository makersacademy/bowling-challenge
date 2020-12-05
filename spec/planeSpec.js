describe("Plane", function() {

  beforeEach(function() {
    my_plane = new Plane();
    // mock objects
    airportSpaceGoodWeather = jasmine.createSpyObj(
      "Airport",
      ["planes_in_hangar", "capacity", "has_space", "good_weather", "land_plane", "takeoff_plane"],
      {
        planes_in_hangar: [],
        capacity: 20,
        has_space: () => {
          return true;
        },
        good_weather: () => {
          return true;
        },
      }
    );

    airportSpaceGoodWeather2 = jasmine.createSpyObj(
      "Airport",
      ["planes_in_hangar", "capacity", "has_space", "good_weather", "land_plane", "takeoff_plane"],
      {
        planes_in_hangar: [],
        capacity: 20,
        has_space: () => {
          return true;
        },
        good_weather: () => {
          return true;
        },
      }
    );

    airportNoSpaceGoodWeather = jasmine.createSpyObj(
      "Airport",
      ["planes_in_hangar", "capacity", "has_space", "good_weather", "land_plane", "takeoff_plane"],
      {
        planes_in_hangar: [],
        capacity: 20,
        has_space: () => {
          return false;
        },
        good_weather: () => {
          return true;
        },
      }
    );

    airportSpaceBadWeather = jasmine.createSpyObj(
      "Airport",
      ["planes_in_hangar", "capacity", "has_space", "good_weather", "land_plane", "takeoff_plane"],
      {
        planes_in_hangar: [],
        capacity: 20,
        has_space: () => {
          return true;
        },
        good_weather: () => {
          return false;
        },
      }
    );
  });

  it("Is not at airport by default", function() {
    expect(my_plane.at_airport()).toEqual(false);
  });

  it("Correctly lands at airport when told to do so", function() {
    my_plane.land(airportSpaceGoodWeather);
    expect(my_plane.airport).toEqual(airportSpaceGoodWeather);
  })

  it("Throws an error when asked to land, but already landed", function() {
    my_plane.land(airportSpaceGoodWeather);
    expect(function() {
      my_plane.land(airportSpaceGoodWeather);
    }).toThrow(new Error("This plane is already at an airport"));
  })

  it("Throws an error when asked to land at airport with no capacity", function() {
    // let statement here
    expect(function() {
      my_plane.land(airportNoSpaceGoodWeather);
    }).toThrow(new Error("This plane cannot land at that airport as the airport is full"));
  })

  it("Throws an error when asked to land at airport with bad weather", function() {
    // let statement here
    expect(function() {
      my_plane.land(airportSpaceBadWeather);
    }).toThrow(new Error("This plane cannot land at that airport due to bad weather"));
  })

  it("Throws an error when asked to take_off, but already taken off", function() {
    expect(function() {
      my_plane.take_off("another airport");
    }).toThrow(new Error("This plane cannot take off as it is not at an airport"));
  })

  it("Throws an error when asked to take_off, from an incorrect airport", function() {
    my_plane.land(airportSpaceGoodWeather);
    expect(function() {
      my_plane.take_off(airportSpaceGoodWeather2);
    }).toThrow(new Error("The pane can't take off from an airport that it is not at"));
  })

  it("Succesful take off leads to airport = -1", function() {
    my_plane.land(airportSpaceGoodWeather);
    my_plane.take_off(airportSpaceGoodWeather);
    expect(my_plane.airport).toEqual(-1);
  })

  it("take off in bad weather will throw and error", function(){
    my_stormy_plane = new Plane(airportSpaceBadWeather)
    expect(function() {
      my_stormy_plane.take_off(airportSpaceBadWeather);
    }).toThrow(new Error("The plane cannot take off from this airport because of stormy weather"));
  })
});
