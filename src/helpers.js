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
