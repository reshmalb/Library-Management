const mongoose = require("mongoose");

const Chat = new mongoose.Schema({
   userFrom: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
      },
    userTo: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
      },
  text:{
    type:String,
    required:true,
  },
  

}, { timestamps: true });

module.exports = mongoose.model("Chat", Chat);