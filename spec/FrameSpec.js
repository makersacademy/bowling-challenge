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

	it("can understand a strike", () => {
		frame.roll(10);
		expect(frame.frameType).toEqual("Strike");
		expect(frame.endFrame).toEqual(true);
	});

	it("understands a spare", () => {
		frame.roll(2);
		frame.roll(8);
		expect(frame.frameType).toEqual("Spare");
	});

	it("understands the difference between a strike and a spare", () => {
		frame.roll(10);
		expect(frame.isSpare()).toEqual(false);
		expect(frame.isStrike()).toEqual(true);
		expect(frame.frameType).toEqual("Strike");
	});
});
