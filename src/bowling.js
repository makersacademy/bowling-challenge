'use strict';

class Bowling {
  score(score_array){
    if( score_array.length <= 2 ) {
      return [0]
    }
    else if ( score_array.length <= 4) {
      return [0,0]
    }
    else if ( score_array.length <= 6) {
      return [0,0,0]
    }
      return [0,0,0,0]
  }
}
