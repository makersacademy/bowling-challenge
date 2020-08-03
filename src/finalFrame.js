'strict mode';
//require('./frame.js');
//import Frame from './frame.js';
//var frameclass = require('./frame.js');
//const Frame = require('./user.js')
class FinalFrame extends Frame {
  constructor(afmClass, finishStates) {
    super(afmClass, finishStates);
  }

  final() {
    return 'final'
  }
}