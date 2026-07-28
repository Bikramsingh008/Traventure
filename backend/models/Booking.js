import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  trek: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trek',
    required: true
  },
  bookingDate: {
    type: Date,
    required: true
  },
  numberOfTravelers: {
    type: Number,
    required: true,
    min: 1
  },
  travelers: [{
    name: String,
    age: Number,
    gender: String,
    idProof: String
  }],
  pickupLocation: {
    type: String,
    default: 'Delhi'
  },
  pickupOption: {
    type: String,
    enum: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab']
  },
  specialRequests: {
    type: String
  },
  couponApplied: {
    type: String
  },
  discountAmount: {
    type: Number,
    default: 0
  },
  totalPrice: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  bookingStatus: {
    type: String,
    enum: ['confirmed', 'pending', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentId: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Booking', bookingSchema)
