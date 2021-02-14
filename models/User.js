const { Schema, model } = require('mongoose');


const UserSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: 'Username is Required'
    // You can also make a validator async by returning a promise.
    //  validate: () => Promise.reject(new Error('Oops!'))
  },
  userEmail: {
    type: String,
    unique: true,
    required: 'Email is Required',
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']

  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thoughts'
    }
  ],
  userCreated: {
    type: Date,
    default: Date.now
  },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }

  //virtuals
)
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})
//from mongoosejs.com/docs/validation.html
const User = model('User', UserSchema);
module.exports = User;