import mongoose from 'mongoose'
import Trek from './models/Trek.js'
import dotenv from 'dotenv'

dotenv.config()

const treks = [
  // Uttarakhand Treks
  {
    name: 'Kedarkantha Trek',
    slug: 'kedarkantha-trek',
    state: 'Uttarakhand',
    difficulty: 'Moderate',
    duration: '6 Days',
    altitude: '12,500 ft',
    bestSeason: ['December', 'January', 'February', 'March'],
    price: 8999,
    originalPrice: 12999,
    discount: 30,
    rating: 4.8,
    totalRatings: 245,
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Kedarkantha is one of the most popular winter treks in Uttarakhand. The trek offers stunning views of snow-capped peaks and beautiful campsites.',
    itinerary: [
      { day: 1, title: 'Arrival in Sankri', description: 'Reach Sankri from Dehradun. Dinner and overnight stay.', meals: 'Dinner', stay: 'Hotel/Guesthouse' },
      { day: 2, title: 'Sankri to Juda ka Talab', description: 'Trek to Juda ka Talab (4 hours). Camp overnight.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Juda ka Talab to Kedarkantha Base', description: 'Trek to Kedarkantha Base (3 hours). Acclimatization.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Summit Day', description: 'Early morning climb to Kedarkantha Peak. Return to Base.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Base to Sankri', description: 'Trek back to Sankri via Juda ka Talab.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel/Guesthouse' },
      { day: 6, title: 'Departure', description: 'Depart from Sankri to Dehradun.', meals: 'Breakfast', stay: '-' }
    ],
    included: [
      'Pickup from Delhi',
      'Drop to Delhi',
      'Transportation',
      'Hotel Stay',
      'Camps',
      'Meals',
      'Trek Leader',
      'Trek Guide',
      'Forest Permits',
      'Entry Fees',
      'Camping Equipment',
      'Medical Kit',
      'Oxygen Cylinder'
    ],
    excluded: [
      'Personal Expenses',
      'Shopping',
      'Insurance',
      'Tips',
      'Extra Meals',
      'Emergency Evacuation'
    ],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '5°C to 10°C', night: '-5°C to 0°C' },
    packingList: [
      { category: 'Clothing', items: ['Thermal inner wear', 'Fleece jacket', 'Down jacket', 'Trekking pants', 'Raincoat'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks', 'Sandals'] },
      { category: 'Essentials', items: ['Backpack (50-60L)', 'Sunscreen', 'Sunglasses', 'Water bottle', 'Headlamp'] }
    ],
    cancellationPolicy: '50% refund if cancelled 15 days before, 25% refund if cancelled 7 days before, no refund after that.',
    faqs: [
      { question: 'Is this trek suitable for beginners?', answer: 'Yes, Kedarkantha is suitable for beginners with moderate fitness level.' },
      { question: 'What is the best time to visit?', answer: 'December to March is the best time for snow trekking.' }
    ],
    category: 'Trekking',
    featured: true
  },
  {
    name: 'Har Ki Dun Trek',
    slug: 'har-ki-dun-trek',
    state: 'Uttarakhand',
    difficulty: 'Moderate',
    duration: '7 Days',
    altitude: '11,675 ft',
    bestSeason: ['April', 'May', 'June', 'September', 'October'],
    price: 10999,
    originalPrice: 15999,
    discount: 31,
    rating: 4.7,
    totalRatings: 189,
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800'
    ],
    description: 'Har Ki Dun, meaning "Valley of Gods", is a cradle-shaped hanging valley in the Garhwal Himalayas.',
    itinerary: [
      { day: 1, title: 'Arrival in Sankri', description: 'Reach Sankri from Dehradun.', meals: 'Dinner', stay: 'Hotel/Guesthouse' },
      { day: 2, title: 'Sankri to Taluka', description: 'Drive to Taluka, then trek to Osla.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Osla to Har Ki Dun', description: 'Trek to Har Ki Dun base camp.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Explore Har Ki Dun', description: 'Day excursion to Jaundhar Glacier.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Har Ki Dun to Osla', description: 'Return trek to Osla village.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Osla to Sankri', description: 'Trek back to Taluka and drive to Sankri.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel/Guesthouse' },
      { day: 7, title: 'Departure', description: 'Depart from Sankri to Dehradun.', meals: 'Breakfast', stay: '-' }
    ],
    included: [
      'Pickup from Delhi',
      'Drop to Delhi',
      'Transportation',
      'Hotel Stay',
      'Camps',
      'Meals',
      'Trek Leader',
      'Trek Guide',
      'Forest Permits',
      'Entry Fees'
    ],
    excluded: ['Personal Expenses', 'Shopping', 'Insurance', 'Tips'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '10°C to 15°C', night: '0°C to 5°C' },
    packingList: [
      { category: 'Clothing', items: ['Thermal inner wear', 'Fleece jacket', 'Trekking pants'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks'] }
    ],
    cancellationPolicy: '50% refund if cancelled 15 days before, 25% refund if cancelled 7 days before.',
    category: 'Trekking',
    featured: true
  },
  {
    name: 'Valley of Flowers Trek',
    slug: 'valley-of-flowers-trek',
    state: 'Uttarakhand',
    difficulty: 'Easy',
    duration: '7 Days',
    altitude: '11,500 ft',
    bestSeason: ['July', 'August', 'September'],
    price: 12999,
    originalPrice: 17999,
    discount: 28,
    rating: 4.7,
    totalRatings: 312,
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800'
    ],
    description: 'A UNESCO World Heritage Site, Valley of Flowers is famous for its endemic alpine flowers and stunning meadows.',
    itinerary: [
      { day: 1, title: 'Arrival in Haridwar', description: 'Reach Haridwar.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Haridwar to Govindghat', description: 'Drive to Govindghat via Joshimath.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel' },
      { day: 3, title: 'Govindghat to Ghangaria', description: 'Trek to Ghangaria (10 km).', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel/Guesthouse' },
      { day: 4, title: 'Valley of Flowers', description: 'Explore Valley of Flowers.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel/Guesthouse' },
      { day: 5, title: 'Ghangaria to Hemkund Sahib', description: 'Trek to Hemkund Sahib and back.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel/Guesthouse' },
      { day: 6, title: 'Ghangaria to Govindghat', description: 'Trek back to Govindghat.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel' },
      { day: 7, title: 'Departure', description: 'Drive back to Haridwar.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Hotel Stay', 'Meals', 'Guide', 'Permits'],
    excluded: ['Personal Expenses', 'Shopping', 'Insurance'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '15°C to 20°C', night: '5°C to 10°C' },
    packingList: [{ category: 'Clothing', items: ['Raincoat', 'Light jacket', 'Trekking pants'] }],
    cancellationPolicy: '50% refund if cancelled 15 days before.',
    category: 'Trekking',
    featured: true
  },
  {
    name: 'Chopta Tungnath Trek',
    slug: 'chopta-tungnath-trek',
    state: 'Uttarakhand',
    difficulty: 'Easy',
    duration: '4 Days',
    altitude: '12,073 ft',
    bestSeason: ['April', 'May', 'June', 'September', 'October'],
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    rating: 4.6,
    totalRatings: 156,
    images: ['https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800'],
    description: 'Tungnath is the highest Shiva temple in the world. The trek offers beautiful views of Chandrashila peak.',
    itinerary: [
      { day: 1, title: 'Arrival in Chopta', description: 'Reach Chopta from Haridwar.', meals: 'Dinner', stay: 'Camps' },
      { day: 2, title: 'Chopta to Tungnath', description: 'Trek to Tungnath temple and Chandrashila.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Explore Chopta', description: 'Day at leisure or short hikes.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Departure', description: 'Depart from Chopta to Haridwar.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide'],
    excluded: ['Personal Expenses', 'Shopping'],
    pickupOptions: ['Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '10°C to 15°C', night: '0°C to 5°C' },
    category: 'Trekking'
  },
  {
    name: 'Brahmatal Trek',
    slug: 'brahmatal-trek',
    state: 'Uttarakhand',
    difficulty: 'Moderate',
    duration: '6 Days',
    altitude: '12,250 ft',
    bestSeason: ['January', 'February', 'March'],
    price: 9999,
    originalPrice: 14999,
    discount: 33,
    rating: 4.7,
    totalRatings: 98,
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800'],
    description: 'Brahmatal is a beautiful winter trek with frozen lakes and stunning mountain views.',
    itinerary: [
      { day: 1, title: 'Arrival in Lohajung', description: 'Reach Lohajung from Kathgodam.', meals: 'Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Lohajung to Bekaltal', description: 'Trek to Bekaltal.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Bekaltal to Brahmatal', description: 'Trek to Brahmatal lake.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Brahmatal to Daldana', description: 'Trek via Brahmatal Peak.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Daldana to Lohajung', description: 'Trek back to Lohajung.', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 6, title: 'Departure', description: 'Depart from Lohajung.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide', 'Equipment'],
    excluded: ['Personal Expenses', 'Shopping'],
    pickupOptions: ['Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '5°C to 10°C', night: '-5°C to 0°C' },
    category: 'Trekking'
  },
  {
    name: 'Roopkund Trek',
    slug: 'roopkund-trek',
    state: 'Uttarakhand',
    difficulty: 'Difficult',
    duration: '8 Days',
    altitude: '15,750 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 15999,
    originalPrice: 21999,
    discount: 27,
    rating: 4.8,
    totalRatings: 267,
    images: ['https://images.unsplash.com/photo-1533588701443-3c52b029e8ee?w=800'],
    description: 'Famous for the mysterious skeleton lake, Roopkund is a challenging high-altitude trek.',
    itinerary: [
      { day: 1, title: 'Arrival in Lohajung', description: 'Reach Lohajung from Kathgodam.', meals: 'Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Lohajung to Didina', description: 'Trek to Didina village.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Didina to Ali Bugyal', description: 'Trek to Ali Bugyal meadow.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Ali Bugyal to Bedni Bugyal', description: 'Trek to Bedni Bugyal.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Bedni Bugyal to Bhagwabasa', description: 'Trek to Bhagwabasa base camp.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Bhagwabasa to Roopkund', description: 'Summit day to Roopkund and back.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 7, title: 'Bhagwabasa to Lohajung', description: 'Return trek to Lohajung.', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 8, title: 'Departure', description: 'Depart from Lohajung.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide', 'Equipment', 'Permits'],
    excluded: ['Personal Expenses', 'Shopping', 'Insurance'],
    pickupOptions: ['Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '5°C to 10°C', night: '-10°C to -5°C' },
    category: 'Trekking',
    featured: true
  },
  {
    name: 'Nag Tibba Trek',
    slug: 'nag-tibba-trek',
    state: 'Uttarakhand',
    difficulty: 'Easy',
    duration: '2 Days',
    altitude: '9,915 ft',
    bestSeason: ['January', 'February', 'March', 'April', 'May', 'November', 'December'],
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 4.5,
    totalRatings: 423,
    images: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800'],
    description: 'Perfect weekend trek near Delhi, Nag Tibba offers great views of Bandarpoonch peak.',
    itinerary: [
      { day: 1, title: 'Dehradun to Pantwari', description: 'Drive to Pantwari, trek to Nag Tibba base.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 2, title: 'Summit and Return', description: 'Early morning climb to Nag Tibba peak, return to Dehradun.', meals: 'Breakfast, Lunch', stay: '-' }
    ],
    included: ['Transportation from Dehradun', 'Camps', 'Meals', 'Guide'],
    excluded: ['Personal Expenses'],
    pickupOptions: ['SUV', 'Private Cab'],
    temperature: { day: '10°C to 15°C', night: '0°C to 5°C' },
    category: 'Weekend Getaway'
  },
  {
    name: 'Dayara Bugyal Trek',
    slug: 'dayara-bugyal-trek',
    state: 'Uttarakhand',
    difficulty: 'Easy',
    duration: '5 Days',
    altitude: '11,683 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    rating: 4.6,
    totalRatings: 134,
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'],
    description: 'Dayara Bugyal is one of the most beautiful high altitude meadows in Uttarakhand.',
    itinerary: [
      { day: 1, title: 'Arrival in Barsu', description: 'Reach Barsu from Dehradun.', meals: 'Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Barsu to Dayara Bugyal', description: 'Trek to Dayara Bugyal.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Explore Dayara Bugyal', description: 'Day excursion to Bakaria Top.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Dayara to Barsu', description: 'Trek back to Barsu.', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 5, title: 'Departure', description: 'Depart from Barsu to Dehradun.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide'],
    excluded: ['Personal Expenses'],
    pickupOptions: ['Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '10°C to 15°C', night: '0°C to 5°C' },
    category: 'Trekking'
  },
  {
    name: 'Kuari Pass Trek',
    slug: 'kuari-pass-trek',
    state: 'Uttarakhand',
    difficulty: 'Moderate',
    duration: '6 Days',
    altitude: '12,516 ft',
    bestSeason: ['April', 'May', 'November', 'December'],
    price: 9999,
    originalPrice: 14999,
    discount: 33,
    rating: 4.7,
    totalRatings: 178,
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800'],
    description: 'Kuari Pass offers spectacular views of Nanda Devi and other Himalayan peaks.',
    itinerary: [
      { day: 1, title: 'Arrival in Joshimath', description: 'Reach Joshimath from Haridwar.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Joshimath to Dhak', description: 'Drive to Dhak, trek to Guling.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Guling to Tali', description: 'Trek via Tali Top.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Tali to Kuari Pass', description: 'Summit to Kuari Pass, return to Tali.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Tali to Auli', description: 'Trek to Auli via Gorson Bugyal.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel' },
      { day: 6, title: 'Departure', description: 'Depart from Auli to Haridwar.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide', 'Permits'],
    excluded: ['Personal Expenses', 'Skiing at Auli'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '5°C to 10°C', night: '-5°C to 0°C' },
    category: 'Trekking'
  },
  {
    name: 'Kedarnath Trek',
    slug: 'kedarnath-trek',
    state: 'Uttarakhand',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '11,755 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 8999,
    originalPrice: 12999,
    discount: 30,
    rating: 4.8,
    totalRatings: 534,
    images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800'],
    description: 'One of the Char Dham pilgrimage sites, Kedarnath is also a beautiful trekking destination.',
    itinerary: [
      { day: 1, title: 'Arrival in Haridwar', description: 'Reach Haridwar.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Haridwar to Gaurikund', description: 'Drive to Gaurikund via Sonprayag.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel' },
      { day: 3, title: 'Gaurikund to Kedarnath', description: 'Trek to Kedarnath temple.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel/Guesthouse' },
      { day: 4, title: 'Kedarnath Exploration', description: 'Visit temple and surroundings.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel/Guesthouse' },
      { day: 5, title: 'Return', description: 'Trek back to Gaurikund and drive to Haridwar.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Hotel Stay', 'Meals', 'Guide', 'Permits'],
    excluded: ['Personal Expenses', 'Puja offerings', 'Helicopter tickets'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '10°C to 15°C', night: '0°C to 5°C' },
    category: 'Trekking',
    featured: true
  },
  // Himachal Pradesh Treks
  {
    name: 'Hampta Pass',
    slug: 'hampta-pass',
    state: 'Himachal Pradesh',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '14,000 ft',
    bestSeason: ['June', 'July', 'August', 'September'],
    price: 10999,
    originalPrice: 15999,
    discount: 31,
    rating: 4.9,
    totalRatings: 389,
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800'
    ],
    description: 'Hampta Pass is a beautiful crossover trek from Kullu to Spiti valley with diverse landscapes.',
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Reach Manali from Delhi.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Manali to Jobra', description: 'Drive to Jobra, trek to Chika.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Chika to Balu Ka Gera', description: 'Trek to Balu Ka Gera.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Balu Ka Gera to Hampta Pass', description: 'Cross Hampta Pass, camp at Siagoru.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Siagoru to Chandratal', description: 'Trek to Chandratal Lake.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Chandratal to Manali', description: 'Drive back to Manali via Rohtang Pass.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide', 'Permits', 'Equipment'],
    excluded: ['Personal Expenses', 'Shopping'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '10°C to 15°C', night: '-5°C to 0°C' },
    category: 'Trekking',
    featured: true
  },
  {
    name: 'Triund Trek',
    slug: 'triund-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Easy',
    duration: '2 Days',
    altitude: '9,350 ft',
    bestSeason: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    price: 2499,
    originalPrice: 3999,
    discount: 37,
    rating: 4.5,
    totalRatings: 567,
    images: ['https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800'],
    description: 'Triund is a popular weekend trek near McLeodganj offering stunning views of Dhauladhar range.',
    itinerary: [
      { day: 1, title: 'McLeodganj to Triund', description: 'Trek from McLeodganj to Triund.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 2, title: 'Return', description: 'Morning views, trek back to McLeodganj.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Camps', 'Meals', 'Guide'],
    excluded: ['Transportation to McLeodganj', 'Personal Expenses'],
    pickupOptions: ['SUV', 'Private Cab'],
    temperature: { day: '15°C to 20°C', night: '5°C to 10°C' },
    category: 'Weekend Getaway'
  },
  {
    name: 'Bhrigu Lake Trek',
    slug: 'bhrigu-lake-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Moderate',
    duration: '4 Days',
    altitude: '14,000 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    rating: 4.6,
    totalRatings: 145,
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'],
    description: 'Bhrigu Lake is a sacred lake situated at high altitude with beautiful meadows.',
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Reach Manali from Delhi.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Manali to Gulaba', description: 'Drive to Gulaba, trek to Rola Kholi.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Rola Kholi to Bhrigu Lake', description: 'Trek to Bhrigu Lake and back.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Return to Manali', description: 'Trek back to Gulaba and drive to Manali.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide'],
    excluded: ['Personal Expenses'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '5°C to 10°C', night: '-5°C to 0°C' },
    category: 'Trekking'
  },
  {
    name: 'Pin Parvati Pass',
    slug: 'pin-parvati-pass',
    state: 'Himachal Pradesh',
    difficulty: 'Challenging',
    duration: '11 Days',
    altitude: '17,457 ft',
    bestSeason: ['July', 'August', 'September'],
    price: 24999,
    originalPrice: 34999,
    discount: 28,
    rating: 4.8,
    totalRatings: 89,
    images: ['https://images.unsplash.com/photo-1533588701443-3c52b029e8ee?w=800'],
    description: 'One of the most challenging treks in Himachal, crossing from Kullu to Spiti valley.',
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Reach Manali from Delhi.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Manali to Barshaini', description: 'Drive to Barshaini, trek to Kheerganga.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Kheerganga to Tunda Bhuj', description: 'Trek to Tunda Bhuj.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Tunda Bhuj to Thakur Kuan', description: 'Trek to Thakur Kuan.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Thakur Kuan to Odi Thach', description: 'Trek to Odi Thach.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Odi Thach to Mantalai Lake', description: 'Trek to Mantalai Lake.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 7, title: 'Mantalai to Pin Parvati Base', description: 'Trek to base camp.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 8, title: 'Cross Pin Parvati Pass', description: 'Cross the pass, camp in Spiti.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 9, title: 'Camp to Mudh Village', description: 'Trek to Mudh village.', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 10, title: 'Mudh to Kaza', description: 'Drive to Kaza.', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel' },
      { day: 11, title: 'Departure', description: 'Depart from Kaza.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide', 'Permits', 'Equipment'],
    excluded: ['Personal Expenses', 'Insurance'],
    pickupOptions: ['Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '0°C to 5°C', night: '-15°C to -10°C' },
    category: 'Trekking'
  },
  {
    name: 'Beas Kund Trek',
    slug: 'beas-kund-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Easy',
    duration: '3 Days',
    altitude: '12,772 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 4999,
    originalPrice: 7999,
    discount: 37,
    rating: 4.5,
    totalRatings: 234,
    images: ['https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800'],
    description: 'Beas Kund is the source of Beas River and offers beautiful views of surrounding peaks.',
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Reach Manali from Delhi.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Manali to Dhundi', description: 'Drive to Dhundi, trek to Beas Kund.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Return to Manali', description: 'Trek back to Dhundi and drive to Manali.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide'],
    excluded: ['Personal Expenses'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '10°C to 15°C', night: '0°C to 5°C' },
    category: 'Trekking'
  },
  {
    name: 'Kheerganga Trek',
    slug: 'kheerganga-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Easy',
    duration: '3 Days',
    altitude: '9,700 ft',
    bestSeason: ['April', 'May', 'June', 'September', 'October'],
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    rating: 4.6,
    totalRatings: 456,
    images: ['https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800'],
    description: 'Famous for its natural hot water spring, Kheerganga is a beautiful trek in Parvati Valley.',
    itinerary: [
      { day: 1, title: 'Arrival in Barshaini', description: 'Reach Barshaini from Manali.', meals: 'Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Barshaini to Kheerganga', description: 'Trek to Kheerganga.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Return', description: 'Trek back to Barshaini.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Transportation from Manali', 'Camps', 'Meals', 'Guide'],
    excluded: ['Personal Expenses'],
    pickupOptions: ['SUV', 'Private Cab'],
    temperature: { day: '15°C to 20°C', night: '5°C to 10°C' },
    category: 'Trekking'
  },
  {
    name: 'Sar Pass Trek',
    slug: 'sar-pass',
    state: 'Himachal Pradesh',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '13,850 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 7999,
    originalPrice: 11999,
    discount: 33,
    rating: 4.6,
    totalRatings: 167,
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'],
    description: 'Sar Pass is a beautiful trek in Parvati Valley with diverse landscapes.',
    itinerary: [
      { day: 1, title: 'Arrival in Kasol', description: 'Reach Kasol from Delhi.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Kasol to Grahan', description: 'Trek to Grahan village.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Grahan to Min Thach', description: 'Trek to Min Thach.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Min Thach to Nagaru', description: 'Trek to Nagaru.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Nagaru to Biskeri', description: 'Cross Sar Pass, camp at Biskeri.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Biskeri to Kasol', description: 'Trek to Barshaini and drive to Kasol.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide'],
    excluded: ['Personal Expenses'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '5°C to 10°C', night: '-5°C to 0°C' },
    category: 'Trekking'
  },
  {
    name: 'Indrahar Pass Trek',
    slug: 'indrahar-pass',
    state: 'Himachal Pradesh',
    difficulty: 'Moderate',
    duration: '4 Days',
    altitude: '14,245 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 6999,
    originalPrice: 9999,
    discount: 30,
    rating: 4.7,
    totalRatings: 198,
    images: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800'],
    description: 'Indrahar Pass offers stunning views of Dhauladhar range and Pir Panjal range.',
    itinerary: [
      { day: 1, title: 'Arrival in McLeodganj', description: 'Reach McLeodganj from Delhi.', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'McLeodganj to Triund', description: 'Trek to Triund.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Triund to Indrahar Pass', description: 'Trek to Indrahar Pass and back to Triund.', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Return to McLeodganj', description: 'Trek back to McLeodganj.', meals: 'Breakfast', stay: '-' }
    ],
    included: ['Pickup from Delhi', 'Transportation', 'Camps', 'Meals', 'Guide', 'Permits'],
    excluded: ['Personal Expenses'],
    pickupOptions: ['Volvo Bus', 'Tempo Traveller', 'SUV', 'Private Cab'],
    temperature: { day: '5°C to 10°C', night: '-5°C to 0°C' },
    category: 'Trekking'
  }
]

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/traventure')
    console.log('MongoDB connected successfully')

    // Clear existing treks
    await Trek.deleteMany({})
    console.log('Cleared existing treks')

    // Insert new treks
    await Trek.insertMany(treks)
    console.log('Inserted treks successfully')

    console.log('Database seeded successfully!')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
