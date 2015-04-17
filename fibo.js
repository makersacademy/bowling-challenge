var Fibo = function() {
};

Fibo.prototype.go = function(n) {
  if (n < 2) {
    return 1;
  }else{
    return this.go(n-2) + this.go(n-1);
  }
};

var thisfibo = new Fibo();

console.log(thisfibo.go(20));