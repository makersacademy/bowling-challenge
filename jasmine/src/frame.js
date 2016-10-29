function Frame(bowls) {
   this.bowls = bowls;
  }

  Frame.prototype.total = function(){
      return this.bowls.reduce(function(a,b){
        return a + b;
      })
    }
  
