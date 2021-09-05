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
});
