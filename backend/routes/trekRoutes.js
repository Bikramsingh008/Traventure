import express from 'express'
import Trek from '../models/Trek.js'

const router = express.Router()

// Get all treks with optional filters
router.get('/', async (req, res) => {
  try {
    const {
      state,
      difficulty,
      minPrice,
      maxPrice,
      duration,
      season,
      search,
      featured,
      page = 1,
      limit = 10
    } = req.query

    const query = {}

    if (state) query.state = state
    if (difficulty) query.difficulty = difficulty
    if (featured === 'true') query.featured = true
    if (season) query.bestSeason = { $in: [season] }

    if (minPrice || maxPrice) {
      query.price = {}
      if (minPrice) query.price.$gte = Number(minPrice)
      if (maxPrice) query.price.$lte = Number(maxPrice)
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { state: { $regex: search, $options: 'i' } }
      ]
    }

    const skip = (Number(page) - 1) * Number(limit)
    const treks = await Trek.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit))

    const total = await Trek.countDocuments(query)

    res.json({
      success: true,
      count: treks.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / Number(limit)),
      treks
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Get featured treks
router.get('/featured', async (req, res) => {
  try {
    const treks = await Trek.find({ featured: true, isActive: true })
      .sort({ rating: -1 })
      .limit(6)

    res.json({ success: true, treks })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Get single trek by ID
router.get('/:id', async (req, res) => {
  try {
    const trek = await Trek.findById(req.params.id)

    if (!trek) {
      return res.status(404).json({ success: false, message: 'Trek not found' })
    }

    res.json({ success: true, trek })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Get trek by slug
router.get('/slug/:slug', async (req, res) => {
  try {
    const trek = await Trek.findOne({ slug: req.params.slug })

    if (!trek) {
      return res.status(404).json({ success: false, message: 'Trek not found' })
    }

    res.json({ success: true, trek })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

export default router
