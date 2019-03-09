function Frame(first_role , second_role){
  this.first_role = first_role ;
  this.second_role = second_role;
};

Frame.prototype._isStrike = function(){
  if(this.first_role === 10){return(true)}else{return(false)};
}

Frame.prototype._isSpare = function(){
  if(this.first_role !== 10 && this.first_role + this.second_role === 10 ){
    return(true)
  }else{return(false)};
}
