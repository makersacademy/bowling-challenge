function Frame() {
    this.ball1 = 0;
    this.ball2 = 0;
    this.numberOfRolls = 0;
    this.score = 0;
    this.spare = false;
    this.strike = false;
};

// Frame.prototype.sayHello = function () {
//   console.log(this.ball1);
// };
//
// Function.prototype.new = function(){
//     var args = arguments
//     var constructor = this
//     function Fake(){
//          constructor.apply(this, args)
//     }
//     Fake.prototype = constructor.prototype
//     return new Fake
// }
