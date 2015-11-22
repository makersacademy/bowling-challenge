var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GamePlayerSchema = new Schema ({
  username: {type: String, required: true },
  playerName: {type: String, required: true },
  pinsBowled: [Number],
  currentFrame: {type: Number, default: 0},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('GamePlayer', GamePlayerSchema);