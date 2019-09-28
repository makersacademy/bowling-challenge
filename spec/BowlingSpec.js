describe("Bowling", function() {
    let bowling;

    beforeEach(function () {
        bowling = new Bowling();
    });

    describe('#test', function () {
        it("test method returns true", function () {
            expect(bowling.test).toBeTruthy();
        });
    });
});