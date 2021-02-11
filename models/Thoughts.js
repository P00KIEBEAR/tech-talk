const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
  writtenBy: {
    type: String
  },
  thoughtBody: {
    type: String
  },
  reaction: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;