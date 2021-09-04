describe("Frame", () => {
	let frame;
	beforeEach(() => {
		frame = new Frame();
	});

	it("it starts with an empty frame", () => {
		expect(frame.rollOne).toEqual(0);
		expect(frame.rollTwo).toEqual(0);
	});
});
