const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

const GameRecordSchema = new Schema({
  score: Number,
  date: { type: Date, default: new Date() },
  user_id: ObjectId
});

module.exports = mongoose.model('GameRecord', GameRecordSchema);
