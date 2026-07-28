import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/traventure')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Traventure API Server is running' })
})

// Import routes (will be created)
// app.use('/api/auth', authRoutes)
// app.use('/api/treks', trekRoutes)
// app.use('/api/bookings', bookingRoutes)
// app.use('/api/reviews', reviewRoutes)
// app.use('/api/users', userRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: 'Something went wrong!' })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
