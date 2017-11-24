'use strict'

function firstRolls(rolls, n) {
    return rolls.slice(0, n);
};

function removeRolls(rolls, n) {
    rolls.splice(0, n);
    return rolls;
}

function add(array) {
    return array.reduce((a, b) => a + b, 0);
};

function last(array) {
    return array[array.length - 1];
};


// var last = (array) => array[array.length - 1]

// var add = (array) => array.reduce((x, y) => x + y, 0)

// var firstRolls = (rolls, n) => rolls.slice(0, n)

// var removeRolls = (rolls, n) => { rolls.splice(0, n); rolls }
