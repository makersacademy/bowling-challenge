var formula = (function() {
  var formulas = {
    'profession profession': theOneAndTwo,
    'profession noun': theOneAndTwo,
    'profession city': theOneOfTwo,
    'number noun': theOneTwos,
    'number profession': theOneTwos,
    'noun noun': theOneAndTwo,
    'describer place': theOneTwo,
    'describer famousPerson': theOneTwo,
    'city noun': theOneTwo,
    'city place': theOneTwo,
    'city noun': theOneTwo,
    'city': theOne,
    'noun': theOne,
    'place': theOne,
    'profession': theOne
  }
  function theOneAndTwo(pubWords) {
    return 'The ' + pubWords[0] + ' and ' + pubWords[1];
  };
  function theOneOfTwo(pubWords) {
    return 'The ' + pubWords[0] + ' of ' + pubWords[1]; 
  }; 
  function theOneTwos(pubWords) {
    return 'The ' + pubWords[0] + ' ' + pluralize(pubWords[1]);
  }; 
  function theOneTwo(pubWords) {
    return 'The ' + pubWords[0] + ' ' + pubWords[1];
  };
  function theOne(pubWords) {
    return 'The ' + pubWords[0];
  };
  return {
    makeName: function(formula, pubWords) {
                return formulas[formula](pubWords) 
              },
    random: function() {
              var keys = Object.keys(formulas)
              var index = Math.floor(Math.random() * keys.length);
              return keys[index];
            }
  }
}())
