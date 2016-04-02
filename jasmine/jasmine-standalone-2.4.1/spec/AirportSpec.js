describe("Airport", function(){
	var airport;
	var plane;
	var plane2;
	
	beforeEach(function(){
		airport = new Airport();
		plane = new Plane();
		plane2 = new Plane();
	});

	it("has a default capacity", function(){
		expect(airport.capacity).toEqual(CAPACITY);
	});

	it("can be initialized with a different capacity", function(){
		airport = new Airport(20);
		expect(airport.capacity).toEqual(20);
	});

	it("has an empty array for storing planes", function(){
		expect(airport.dock).toEqual([]);
	});

	describe("#isStormy", function(){
		
		beforeEach(function(){
			spyOn(Math, 'random').and.returnValue(0.99);
		});

		it("will return true when stormy", function(){
			expect(airport.isStormy).toBeTruthy();			
		});

		it("will not allow planes to land", function(){
			expect(function() { airport.requestLanding(plane) }).toThrowError("Airport is closed due to bad weather");
		});

		it("will not allow planes to takeoff", function(){
			airport.dock.push(plane);
			expect(function() { airport.requestTakeOff(plane) }).toThrowError("Airport is closed due to bad weather");
		});

	});

	describe("when good weather", function(){

		beforeEach(function(){
			spyOn(Math, 'random').and.returnValue(0.1);
			spyOn(plane, 'flying').and.returnValue(true);
		});

		describe("#request landing", function(){

			it("will make the plane land into the dock", function(){

				airport.requestLanding(plane);
				expect(airport.dock).toContain(plane);
			});

			it("will call the land function on plane", function(){
				spyOn(plane, 'land');
				airport.requestLanding(plane);
				expect(plane.land).toHaveBeenCalled();
			});

			it("will not allow a plane to land if the dock is full", function(){
				airport = new Airport(1);
				airport.requestLanding(plane);
				expect(function() {airport.requestLanding(plane2) }).toThrowError("Airport at capacity");
			});

		});

		describe("#request takeoff", function(){

			it("will make the plane leave the dock", function(){
				airport.requestLanding(plane);
				airport.requestTakeOff(plane);
				expect(airport.dock).not.toContain(plane);
			});

			it("will call the takeoff function on plane", function(){
				spyOn(plane, 'takeOff');
				airport.requestLanding(plane);
				airport.requestTakeOff(plane);
				expect(plane.takeOff).toHaveBeenCalled();
			});

			it("will not be able to tell a plane to takeoff if the plane is not in the dock", function(){
				airport.requestLanding(plane);
				expect( function() {airport.requestTakeOff(plane2) }).toThrowError("This plane is not at this airport");
			});

		});

});

});