const TenthFrameSpecial = require('../lib/tenthframe');



/// =========== FOR 10th FRAME ================ /////////


// SPARE FRAME:
describe('10th Frame Special - Spare: [5, 5, 9]', () => {
    const frame = new TenthFrameSpecial(5, 5, 9);
    test('construction values: rolls = [5, 5, 9]; type = spare', () => {
        expect(frame.rolls).toEqual([5, 5, 9]);
        expect(frame.type).toBe('spare');
    });
    test('current total: 19', () => {
        expect(frame.getCurrentTotal()).toBe(19);
    });
});

// STRIKE FRAME:
describe('10th Frame Special - Strike: [10, 2, 9]', () => {
    const frame = new TenthFrameSpecial(10, 2, 9);
    test('construction values: rolls = [10, 2, 9]; type = strike', () => {
        expect(frame.rolls).toEqual([10, 2, 9]);
        expect(frame.type).toBe('strike');
    });
    test('current total: 21', () => {
        expect(frame.getCurrentTotal()).toBe(21);
    });
});


// PERFECT GAME FRAME: [10,10,10]
describe('10th Frame Special - Perfect Game: [10, 10, 10]', () => {
    const frame = new TenthFrameSpecial(10, 10, 10);
    test('construction values: rolls = [10, 10, 10]; type = strike', () => {
        expect(frame.rolls).toEqual([10, 10, 10]);
        expect(frame.type).toBe('strike');
    });
    test('current total: 30', () => {
        expect(frame.getCurrentTotal()).toBe(30);
    });
});



// ERROR HANDLING:
describe('TenthFrameSpecial - Error Handling', () => {
    test('throws an error when roll1 is not a number', () => {
        expect(() => new TenthFrameSpecial('', 3, 5)).toThrowError('Rolls must be numbers and not empty.');
    });

    test('throws an error when roll2 is not a number', () => {
        expect(() => new TenthFrameSpecial(5, null, 5)).toThrowError('Rolls must be numbers and not empty.');
    });

    test('throws an error when roll3 is not a number', () => {
        expect(() => new TenthFrameSpecial(5, 3, 'hello')).toThrowError('Rolls must be numbers and not empty.');
    });

    test('throws an error when roll values are out of range', () => {
        expect(() => new TenthFrameSpecial(11, 3, 5)).toThrowError('Roll values must be between 0 and 10.');
    });

    test('throws an error when sum of roll1 and roll2 cannot exceed 10 if roll1 is not a strike', () => {
        expect(() => new TenthFrameSpecial(7, 6, 5)).toThrowError('The sum of roll1 and roll2 cannot exceed 10 if roll1 is not a strike.');
    });

    test('throws an error when the frame is not a strike or a spare', () => {
        expect(() => new TenthFrameSpecial(7, 1, 5)).toThrowError('The initial frame must be a strike or a spare.');
    });


});