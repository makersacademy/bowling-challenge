function get2DArray(size) {
    size = size > 0 ? size : 0;
    var arr = [];
    while(size--) { arr.push([]); }
    return arr;
}

function getSum(total, num) {
    return total + Number(num);
}
