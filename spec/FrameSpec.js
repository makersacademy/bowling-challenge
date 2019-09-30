describe("Frame", function() {
    let frame;

    describe('#Frame function', function () {
        it("bowling 3, 4 sets bowl1 and bowl2 as 3 and 4 respectively", function () {
            frame = new Frame(3, 4);
            expect(frame.bowl1).toEqual(3);
            expect(frame.bowl2).toEqual(4);
        });
    });

    describe('Strike', function () {
        it("bowling 10 on bowl 1 sets strike flag to true", function () {
            frame = new Frame(10);
            expect(frame.strike).toBeTruthy();
        });

        it("bowling 4 on bowl, 5 on bowl 2 leaves strike flag false", function () {
            frame = new Frame(4, 5);
            expect(frame.strike).toBeFalsy();
        });
    });

    describe('Spare', function () {
        it("bowling 6 on bowl 1, 2 on bowl 2, leaves spare flag false", function () {
            frame = new Frame(6,2);
            expect(frame.spare).toBeFalsy();
        });
        it("bowling 6 on bowl, 4 on bowl 2 sets spare flag true", function () {
            frame = new Frame(6,4);
            expect(frame.spare).toBeTruthy();
        });
    });
});