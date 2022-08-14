const mongoose=require('mongoose')
const transactionSchema = new mongoose.Schema({
  user_id: String,
  user_phone: Number,
  state: {
    type: String,
    required: [true, "Siz state ni kiriting !"],
  },
  amount: {
    type: Number,
    required: [true, "Siz amount ni kiriting !"],
  },
  create_time: {
    type: Date,
    default: Date.now(),
  },
  perform_time: {
    type: Date,
    default: Date.now(),
  },
  cancel_time: {
    type: Date,
    default: Date.now(),
  },
  reason: {
    type: Number,
    required: [true, "Siz reason ni kiritmadingiz !"],
  },
  create_at: {
    type: Date,
    default: Date.now(),
  },
});

const transaction=mongoose.model('transactions',transactionSchema)
module.exports=transaction