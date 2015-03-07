var pluralize = (function() {

  return function(word) {
    if(endsInOose(word)) {
        return isMoose(word)
                 ? word
                 : 'Geese';
      } else {
        return isAlreadyPlural(word)
                 ? word + 'es'
                 : word + 's';
      }
    }

  //private
  function isAlreadyPlural(word) {
    return word[(word.length - 1)] === 's'
  };
  function endsInOose(word) {
    return word.slice(1) === 'oose'
  };
  function isMoose(word) {
    return word[0] === 'M'
  };

}());
