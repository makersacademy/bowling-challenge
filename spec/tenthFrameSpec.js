var TenthFrame = require('../src/tenthFrame.js');
describe("TenthFrame", function() {

    beforeEach(function() {
       tenthFrame = new TenthFrame();
    });

    it("is an instance of TenthFrame", function() {
        expect(tenthFrame).toEqual(jasmine.any(TenthFrame));
    });
});

