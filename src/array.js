function Daft () {
    this.daft = [[1, 2], [3, 4]]
    this.sum = 0
}

Daft.prototype.total = function(array) {
    var dave = 0
    array.forEach(function(entry) {
        for (var i = 0; i < entry.length; i++) {
            console.log(entry[i])
            console.log(dave)
        dave += entry[i]
        }
    })
    this.sum = dave
}

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i])
// this.sum += array[i]
// console.log(this.sum)
// }


// Scorecard.prototype.hello = function(array) {
//     array.forEach(function (entry) {
//         var sum = entry.reduce(function(a, b){
//             return a + b;
//         }, 0);
//     this.totalScore = sum
// });
// }

// Daft.prototype.total = function (array) {
//     for (var i = 0; i < array.length; i++) {
//         this.sum += array[i]
//         }
// }