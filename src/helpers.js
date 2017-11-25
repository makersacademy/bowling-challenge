'use strict';

var last = array => array[array.length - 1];

var add = array => array.reduce((x, y) => x + y, 0);

var firstRolls = (rolls, n) => rolls.slice(0, n);

function removeRolls(rolls, n) {
    rolls.splice(0, n);
    return rolls;
}
