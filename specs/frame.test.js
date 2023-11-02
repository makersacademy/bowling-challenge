const Frame = require('../lib/frame');

/// =========== FOR FRAME ================ /////////

// OPEN FRAME
describe('Frame - open frame: [5, 3]', () => {
    const frame = new Frame(5, 3);
    test('construction values: rolls = [5,3]; type = open; bonus = 0', () => {
        expect(frame.rolls).toEqual([5, 3]);
        expect(frame.type).toBe('open');
        expect(frame.bonus).toBe(0);
    });
    test('initial total: 8; current total: 8', () => {
        expect(frame.getInitialTotal()).toBe(8);
        expect(frame.getCurrentTotal()).toBe(8);
    });
});

// SPARE FRAME
describe('Frame - spare frame: [5,5]', () => {
    const frame = new Frame(5, 5);
    test('construction values: rolls = [5,5]; type = spare; bonus = 0', () => {
        expect(frame.rolls).toEqual([5, 5]);
        expect(frame.type).toBe('spare');
        expect(frame.bonus).toBe(0);
    });
    test('initial total: 10; current total: 10', () => {
        expect(frame.getInitialTotal()).toBe(10);
        expect(frame.getCurrentTotal()).toBe(10);
    });
    test('adding bonus of 4 updates the current total to 14', () => {
        frame.updateBonus(4);
        expect(frame.bonus).toBe(4);
        expect(frame.getInitialTotal()).toBe(10);
        expect(frame.getCurrentTotal()).toBe(14);
    });
});

// STRIKE FRAME
describe('Frame - strike frame: [10, 0]', () => {
    const frame = new Frame(10, 0);
    test('construction values: rolls = [10, 0]; type = strike; bonus = 0', () => {
        expect(frame.rolls).toEqual([10, 0]);
        expect(frame.type).toBe('strike');
        expect(frame.bonus).toBe(0);
    });
    test('initial total: 10; current total: 10', () => {
        expect(frame.getInitialTotal()).toBe(10);
        expect(frame.getCurrentTotal()).toBe(10);
    });
    test('adding bonus of 4 updates the current total to 14', () => {
        frame.updateBonus(4);
        expect(frame.bonus).toBe(4);
        expect(frame.getInitialTotal()).toBe(10);
        expect(frame.getCurrentTotal()).toBe(14);
    });
    test('adding bonus of 4+5 updates the current total to 19', () => {
        frame.updateBonus(4+5);
        expect(frame.bonus).toBe(9);
        expect(frame.getInitialTotal()).toBe(10);
        expect(frame.getCurrentTotal()).toBe(19);
    });
});

// GUTTER GAME FRAME [0,0]
describe('Frame - open frame: [0, 0]', () => {
    const frame = new Frame(0, 0);
    test('construction values: rolls = [0,0]; type = open; bonus = 0', () => {
        expect(frame.rolls).toEqual([0,0]);
        expect(frame.type).toBe('open');
        expect(frame.bonus).toBe(0);
    });
    test('initial total: 0; current total: 0', () => {
        expect(frame.getInitialTotal()).toBe(0);
        expect(frame.getCurrentTotal()).toBe(0);
    });
});


// PERFECT GAME FRAME [10,0]
describe('Frame - strike frame: [10, 0]', () => {
    const frame = new Frame(10, 0);
    test('construction values: rolls = [10, 0]; type = strike; bonus = 0', () => {
        expect(frame.rolls).toEqual([10, 0]);
        expect(frame.type).toBe('strike');
        expect(frame.bonus).toBe(0);
    });
    test('initial total: 10; current total: 10', () => {
        expect(frame.getInitialTotal()).toBe(10);
        expect(frame.getCurrentTotal()).toBe(10);
    });
    test('adding bonus of 10 updates the current total to 20', () => {
        frame.updateBonus(10);
        expect(frame.bonus).toBe(10);
        expect(frame.getInitialTotal()).toBe(10);
        expect(frame.getCurrentTotal()).toBe(20);
    });
    test('adding bonus of 10+10 updates the current total to 30', () => {
        frame.updateBonus(10+10);
        expect(frame.bonus).toBe(20);
        expect(frame.getInitialTotal()).toBe(10);
        expect(frame.getCurrentTotal()).toBe(30);
    });

});


// ERROR HANDLING
describe('Frame - Error Handling', () => {
    test('throws an error when roll1 is not a number', () => {
        expect(() => new Frame('', 3)).toThrowError('Rolls must be numbers and not empty.');
    });
    
    test('throws an error when roll2 is not a number', () => {
        expect(() => new Frame(5, null)).toThrowError('Rolls must be numbers and not empty.');
    });
    
    test('throws an error when roll values are out of range', () => {
        expect(() => new Frame(11, 3)).toThrowError('Roll values must be between 0 and 10.');
    });

    test('throws an error when roll values exceed 10', () => {
        expect(() => new Frame(7, 6)).toThrowError('The sum of roll1 and roll2 cannot exceed 10.');
    });

});


