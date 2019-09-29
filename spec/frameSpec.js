describe('Frame', function() {

    let frame; 

    beforeEach(function() {
        frame = new Frame();
    });

    for(let i = 0; i <= 10; i++) {
        it('contains the number ' + i, function() {
            const target = i;
            frame.firstRoll(target);
            expect(frame.cell1).toEqual(target);
        });
    }

    ['string', -1, 11, 0.1, null, undefined, [], {}].forEach((value) => {
        it('does not accept ' + value, function() {
            let roll = value;
            expect(function(){ frame.firstRoll(roll)}).toThrow(new Error('Invalid number'));
        });
    });

    for(let i = 0; i <= 10; i++) {
        it('contains the number ' + i, function() {
            const target = i;
            frame.firstRoll(0);
            frame.secondRoll(target);
            expect(frame.cell2).toEqual(target);
        });
    }

    ['string', -1, 11, 0.1, null, undefined, [], {}].forEach((value) => {
        it('does not accept ' + value, function() {
            let roll = value;
            expect(function(){ frame.secondRoll(roll)}).toThrow(new Error('Invalid number'));
        });
    });
    it('makes cell2 to have 10 as max value', function() {
        frame.firstRoll(5);
        expect(function(){ frame.secondRoll(6)}).toThrow(new Error('Over the limit'));
    });   

    it('is a strike', function() {
        frame.firstRoll(10);
        expect(frame.isStrike()).toEqual(true);
    });

    it('is not a strike', function() {
        frame.firstRoll(9);
        expect(frame.isStrike()).toEqual(false);
    });

    it('is a spare', function() {
        frame.firstRoll(9);
        frame.secondRoll(1);
        expect(frame.isSpare()).toEqual(true);
    });

    it('is not a spare', function() {
        frame.firstRoll(5);
        frame.secondRoll(4);
        expect(frame.isSpare()).toEqual(false);
    });

    it('is not a spare if it is a strike', function() {
        frame.firstRoll(10);
        expect(frame.isSpare()).toEqual(false);
    });
});