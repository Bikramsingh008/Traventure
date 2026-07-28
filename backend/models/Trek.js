import mongoose from 'mongoose'

const trekSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  state: {
    type: String,
    required: true,
    enum: ['Uttarakhand', 'Himachal Pradesh', 'Kashmir', 'Ladakh', 'Sikkim']
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Moderate', 'Difficult', 'Challenging']
  },
  duration: {
    type: String,
    required: true
  },
  altitude: {
    type: String,
    required: true
  },
  bestSeason: {
    type: [String],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 0,
    max: 5
  },
  totalRatings: {
    type: Number,
    default: 0
  },
  images: [{
    type: String
  }],
  description: {
    type: String,
    required: true
  },
  itinerary: [{
    day: Number,
    title: String,
    description: String,
    meals: String,
    stay: String
  }],
  included: [{
    type: String
  }],
  excluded: [{
    type: String
  }],
  pickupPoint: {
    type: String,
    default: 'Delhi'
  },
  dropPoint: {
    type: String,
    default: 'Delhi'
  },
  pickupOptions: [{
    type: String,
    enum: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab']
  }],
  temperature: {
    day: String,
    night: String
  },
  packingList: [{
    category: String,
    items: [String]
  }],
  cancellationPolicy: {
    type: String
  },
  faqs: [{
    question: String,
    answer: String
  }],
  map: {
    type: String
  },
  seatsLeft: {
    type: Number,
    default: 20
  },
  maxSeats: {
    type: Number,
    default: 20
  },
  isActive: {
    type: Boolean,
    default: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    enum: ['Trekking', 'Camping', 'Road Trip', 'Weekend Getaway', 'Group Tour'],
    default: 'Trekking'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Trek', trekSchema)
