frameIdentifier = (function() {
  function getFrameOperator(arrayOfPinsPerRoll) {

    if(arrayOfPinsPerRoll[0] === 10){
      return arrayOfPinsPerRoll.slice(0,1);
    } else {
      return arrayOfPinsPerRoll.slice(0,2);
    }
  };   

  return {
    getFrame: getFrameOperator
  };
})();