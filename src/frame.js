function Frame(){
  this.total = [];
  this.PINS = 10;
};

  Frame.prototype.pinsStanding = function(){
   return this.PINS;
  };

  Frame.prototype.checkWhichRoll = function(){
    this.rollCounter == 1 ? 1 : 2;
  };

  Frame.prototype.roll = function(){
    x = Math.floor((Math.random() * (this.PINS + 1)) + 0);
    return x;
      };

  Frame.prototype.rollResult = function(){
    this.score();
    return x;
  };
  // var c;
  Frame.prototype.scoreTotal = function(){
    this.total.push(x);
    this.total.reduce(function(a, b){
      // console.log("ARRAY PARAMETERS: "+a, b)
    return c = a + b;
    }, 0);
    console.log("c, a.k.a Total points this frame: "+c)
    // console.log("ARRAY CONTENTS: "+this.total)
    // return c;
  }



  Frame.prototype.score = function(){
    //  console.log("Current pins left standing: "+this.PINS);
    //  console.log("Fallen pins: "+x);
    //  console.log("This roll: "+ x)
    // if (this.PINS == 0){
    //       // this.spare();
    //       //  this.strike();
    // }
    // else {
      return this.PINS -= x;
    // }
  };


  // Frame.prototype.scoreTotal = function(){
  //   this.total.push(x);
  //   this.total.reduce(function(a, b){
  //     c = a + b;
  //   }, 0);
  //     this.spare();
  //     this.strike();
  //     // console.log("Arr grand total: "+c);
  //     // console.log("This roll: "+ x)
  //     // console.log("Individual rolls: "+this.total)
  //     return c;
  // };



  Frame.prototype.strike = function(){
     return ((this.rollResult() == 10) && (this.checkWhichRoll() == 1)) ? true : false
  };

  Frame.prototype.spare = function(){
  return ((this.rollResult() == 10) && (this.checkWhichRoll() == 2)) ? true : false
  };
