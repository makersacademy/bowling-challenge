describe("Frame", () => {
	let frame;
	beforeEach(() => {
		frame = new Frame();
	});

	it("it starts with an empty frame", () => {
		expect(frame.rollOne).toEqual(0);
		expect(frame.rollTwo).toEqual(0);
	});

	it("can roll one ball", () => {
		frame.roll(4);
		expect(frame.rollOne).toEqual(4);
	});

	it("can roll a second ball", () => {
		frame.roll(4);
		frame.roll(2);
		expect(frame.rollTwo).toEqual(2);
	});

	it("can roll a strike", () => {
		frame.roll(10);
		expect(frame.currentroll).toEqual(3);
	});
});
