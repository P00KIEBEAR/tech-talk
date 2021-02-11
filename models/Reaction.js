const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  writtenBy: {
    type: String
  },
  reactionBody: {
    type: String
  },
  userName: {
    type: String,
    required: "A MUST"

  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Thoughts = model('Reaction', ReactionSchema);

module.exports = Reaction;