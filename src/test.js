function Class(newclass) {
  var a = new newclass();
  console.log(a.test());
};

function Class1() {

};

Class1.prototype.test = function() {
  return "hello";
};

function Class2() {

};

Class2.prototype.test = function() {
  return "world";
};

new Class(Class2);