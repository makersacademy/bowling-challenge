var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PinsBowledSchema = new Schema ({
  pinsBowled: [Number],
  created_at: {type: Date, default: Date.now}
});

mongoose.model('PinsBowled', PinsBowledSchema);