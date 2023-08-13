const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema(({
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },
    password: {
        type:String,
        required:true
    }
  }))

// generating hash password to store
schema.pre("save", function (next) {
    const user = this
  
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(12, function (saltError, salt) {
        if (saltError) {
          return next(saltError)
        } else {
          bcrypt.hash(user.password, salt, function(hashError, hash) {
            if (hashError) {
              return next(hashError)
            }
  
            user.password = hash
            next()
          })
        }
      })
    } else {
      return next()
    } 
})

  const User = mongoose.model("User", schema);

  module.exports = User;