describe("FinalFrame", () => {
	let finalFrame;
	beforeEach(() => {
		finalFrame = new FinalFrame();
	});
	it("starts with an empty frame", () => {
		expect(finalFrame.rollOne).toEqual(0);
		expect(finalFrame.rollTwo).toEqual(0);
		expect(finalFrame.rollThree).toEqual(0);
	});

	it("can roll three balls if a spare on the first two rolls", () => {
		finalFrame.roll(4);
		finalFrame.roll(6);
		finalFrame.roll(5);
		expect(finalFrame.rollThree).toEqual(5);
	});

	it("can roll three balls if a strike on the first roll", () => {
		finalFrame.roll(10);
		finalFrame.roll(6);
		finalFrame.roll(5);
		expect(finalFrame.rollThree).toEqual(5);
	});
});
