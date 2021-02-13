const { Schema, model } = require('mongoose');
//const ReactionSchema = require("./Reaction")

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

const Reaction = model('Reaction', ReactionSchema);

const ThoughtsSchema = new Schema({
  writtenBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
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
  },
  reactions: [ReactionSchema]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  });

ThoughtsSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});
const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;