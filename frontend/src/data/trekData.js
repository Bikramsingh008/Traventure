export const trekData = [
  {
    _id: '1',
    name: 'Kedarkantha Trek',
    slug: 'kedarkantha-trek',
    state: 'Uttarakhand',
    difficulty: 'Moderate',
    duration: '6 Days',
    altitude: '12,500 ft',
    bestSeason: ['December', 'January', 'February', 'March'],
    price: 8999,
    originalPrice: 12000,
    discount: 25,
    rating: 4.8,
    totalRatings: 234,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800'
    ],
    description: 'Kedarkantha is one of the most popular winter treks in Uttarakhand. The summit offers breathtaking 360-degree views of Himalayan peaks including Swargarohini, Bandarpunch, and Black Peak.',
    included: ['Meals', 'Hotel Stay', 'Transportation', 'Pickup from Delhi'],
    pickupPoint: 'Delhi',
    pickupOptions: ['Delhi', 'Dehradun'],
    temperature: { day: '5°C to 10°C', night: '-5°C to 0°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear'],
    itinerary: [
      { day: 1, title: 'Arrival in Sankri', description: 'Reach Sankri base camp, briefing and overnight stay', meals: 'Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Trek to Juda ka Talab', description: '6 km trek through beautiful forests', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Trek to Kedarkantha Base', description: '4 km trek to base camp', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Summit Day', description: 'Early morning summit climb and return to base', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Return to Sankri', description: 'Descend back to Sankri', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 6, title: 'Departure', description: 'Return journey', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Thermal inner wear', 'Fleece jacket', 'Down jacket', 'Trekking pants', 'Rain jacket'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (3 pairs)', 'Sandals'] },
      { category: 'Essentials', items: ['Backpack (50L)', 'Sunscreen', 'Sunglasses', 'Water bottle', 'Headlamp'] }
    ],
    faqs: [
      { question: 'Is this trek suitable for beginners?', answer: 'Yes, Kedarkantha is considered moderate and suitable for beginners with basic fitness.' },
      { question: 'What is the best time to visit?', answer: 'December to March is ideal for snow trekking.' }
    ],
    cancellationPolicy: 'Free cancellation up to 15 days before trek. 50% refund for cancellations 7-14 days before. No refund within 7 days.'
  },
  {
    _id: '2',
    name: 'Valley of Flowers Trek',
    slug: 'valley-of-flowers-trek',
    state: 'Uttarakhand',
    difficulty: 'Easy',
    duration: '5 Days',
    altitude: '11,500 ft',
    bestSeason: ['July', 'August', 'September'],
    price: 7999,
    originalPrice: 10000,
    discount: 20,
    rating: 4.9,
    totalRatings: 312,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
    ],
    description: 'A UNESCO World Heritage Site, Valley of Flowers is a mesmerizing meadow of endemic alpine flowers. The valley changes colors with the season, creating a magical landscape.',
    included: ['Meals', 'Hotel Stay', 'Transportation'],
    pickupPoint: 'Haridwar',
    pickupOptions: ['Haridwar', 'Rishikesh'],
    temperature: { day: '15°C to 20°C', night: '5°C to 10°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear'],
    itinerary: [
      { day: 1, title: 'Arrival in Haridwar', description: 'Reach Haridwar, briefing and overnight stay', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Drive to Govindghat', description: 'Scenic drive to Govindghat', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 3, title: 'Trek to Ghangaria', description: '10 km trek to base camp', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 4, title: 'Valley of Flowers', description: 'Explore the valley and return', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 5, title: 'Return to Haridwar', description: 'Trek back and drive to Haridwar', meals: 'Breakfast, Lunch', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Light jacket', 'Trekking pants', 'T-shirts', 'Rain jacket'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (3 pairs)'] },
      { category: 'Essentials', items: ['Backpack (40L)', 'Sunscreen', 'Insect repellent', 'Water bottle'] }
    ],
    faqs: [
      { question: 'When is the best time to visit?', answer: 'July to September when flowers are in full bloom.' },
      { question: 'Is it suitable for families?', answer: 'Yes, this is an easy trek suitable for all ages.' }
    ],
    cancellationPolicy: 'Free cancellation up to 10 days before trek. 50% refund for cancellations 5-9 days before. No refund within 5 days.'
  },
  {
    _id: '3',
    name: 'Hampta Pass Trek',
    slug: 'hampta-pass-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '14,000 ft',
    bestSeason: ['June', 'July', 'August', 'September'],
    price: 9999,
    originalPrice: 13000,
    discount: 23,
    rating: 4.7,
    totalRatings: 189,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Hampta Pass is a beautiful crossover trek that takes you from lush green valleys of Kullu to the arid landscapes of Spiti. The dramatic landscape change is a photographer\'s paradise.',
    included: ['Meals', 'Hotel Stay', 'Transportation', 'Pickup from Delhi'],
    pickupPoint: 'Manali',
    pickupOptions: ['Manali', 'Delhi'],
    temperature: { day: '10°C to 15°C', night: '0°C to 5°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear'],
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Reach Manali, briefing and acclimatization', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Trek to Chika', description: 'Start trek from Jobra to Chika', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Trek to Balu Ka Ghera', description: 'Gradual ascent to Balu Ka Ghera', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Cross Hampta Pass', description: 'Cross the pass and descend to Siagoru', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Return to Manali', description: 'Drive back to Manali via Chatru', meals: 'Breakfast, Lunch', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Thermal wear', 'Fleece jacket', 'Windproof jacket', 'Trekking pants'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (4 pairs)', 'Sandals'] },
      { category: 'Essentials', items: ['Backpack (50L)', 'Sunscreen', 'Sunglasses', 'Water bottle', 'First aid kit'] }
    ],
    faqs: [
      { question: 'Is it difficult?', answer: 'Moderate difficulty, suitable for beginners with good fitness.' },
      { question: 'What makes this trek special?', answer: 'The dramatic landscape change from green Kullu to arid Spiti.' }
    ],
    cancellationPolicy: 'Free cancellation up to 15 days before trek. 50% refund for cancellations 7-14 days before. No refund within 7 days.'
  },
  {
    _id: '4',
    name: 'Roopkund Trek',
    slug: 'roopkund-trek',
    state: 'Uttarakhand',
    difficulty: 'Difficult',
    duration: '7 Days',
    altitude: '15,700 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 14999,
    originalPrice: 18000,
    discount: 17,
    rating: 4.6,
    totalRatings: 156,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Roopkund, also known as the Mystery Lake, is famous for the human skeletons found at its bottom. This challenging trek offers stunning views of Trishul and Nanda Ghunti peaks.',
    included: ['Meals', 'Hotel Stay', 'Transportation', 'Pickup from Delhi'],
    pickupPoint: 'Delhi',
    pickupOptions: ['Delhi', 'Kathgodam'],
    temperature: { day: '8°C to 15°C', night: '-2°C to 5°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear', 'Porter services'],
    itinerary: [
      { day: 1, title: 'Arrival in Lohajung', description: 'Reach Lohajung base camp', meals: 'Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Trek to Didina', description: '8 km trek through villages', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Trek to Bedni Bugyal', description: 'Beautiful meadow camp', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Trek to Bhagwabasa', description: 'High altitude camp', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Roopkund Summit', description: 'Early morning climb to Roopkund', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Return to Bedni', description: 'Descend back to Bedni', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 7, title: 'Return to Lohajung', description: 'Complete descent and departure', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Heavy thermal wear', 'Down jacket', 'Waterproof pants', 'Multiple layers'] },
      { category: 'Footwear', items: ['High ankle trekking shoes', 'Gaiters', 'Socks (5 pairs)'] },
      { category: 'Essentials', items: ['Backpack (60L)', 'Crampons', 'Ice axe', 'Trekking poles', 'First aid kit'] }
    ],
    faqs: [
      { question: 'Is it suitable for beginners?', answer: 'No, this is a difficult trek requiring prior experience.' },
      { question: 'What about the skeletons?', answer: 'The skeletal remains are visible at the lake, a mysterious archaeological site.' }
    ],
    cancellationPolicy: 'Free cancellation up to 20 days before trek. 50% refund for cancellations 10-19 days before. No refund within 10 days.'
  },
  {
    _id: '5',
    name: 'Triund Trek',
    slug: 'triund-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Easy',
    duration: '2 Days',
    altitude: '9,350 ft',
    bestSeason: ['March', 'April', 'May', 'June', 'September', 'October'],
    price: 2999,
    originalPrice: 4000,
    discount: 25,
    rating: 4.5,
    totalRatings: 445,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Triund is a perfect weekend trek near McLeodganj. The trail offers beautiful views of the Dhauladhar range and is ideal for beginners. The sunset view from the top is mesmerizing.',
    included: ['Meals', 'Hotel Stay'],
    pickupPoint: 'McLeodganj',
    pickupOptions: ['McLeodganj', 'Dharamshala'],
    temperature: { day: '15°C to 20°C', night: '5°C to 10°C' },
    excluded: ['Personal expenses', 'Transportation'],
    itinerary: [
      { day: 1, title: 'Trek to Triund', description: '9 km trek from McLeodganj', meals: 'Lunch, Dinner', stay: 'Camps' },
      { day: 2, title: 'Return to McLeodganj', description: 'Morning views and descent', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Light jacket', 'Trekking pants', 'T-shirts'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (2 pairs)'] },
      { category: 'Essentials', items: ['Backpack (30L)', 'Sunscreen', 'Water bottle', 'Snacks'] }
    ],
    faqs: [
      { question: 'Is it suitable for beginners?', answer: 'Yes, perfect for first-time trekkers.' },
      { question: 'How long is the trek?', answer: 'Approximately 9 km one way, takes 4-5 hours.' }
    ],
    cancellationPolicy: 'Free cancellation up to 7 days before trek. 50% refund for cancellations 3-6 days before. No refund within 3 days.'
  },
  {
    _id: '6',
    name: 'Kheerganga Trek',
    slug: 'kheerganga-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Easy',
    duration: '3 Days',
    altitude: '9,700 ft',
    bestSeason: ['April', 'May', 'June', 'September', 'October'],
    price: 3999,
    originalPrice: 5500,
    discount: 27,
    rating: 4.6,
    totalRatings: 367,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Kheerganga is famous for its natural hot water spring believed to have healing properties. The trek takes you through beautiful pine forests and offers stunning views of Parvati Valley.',
    included: ['Meals', 'Hotel Stay', 'Transportation'],
    pickupPoint: 'Kasol',
    pickupOptions: ['Kasol', 'Bhuntar'],
    temperature: { day: '15°C to 22°C', night: '8°C to 12°C' },
    excluded: ['Personal expenses', 'Insurance'],
    itinerary: [
      { day: 1, title: 'Trek to Kheerganga', description: '12 km trek through pine forests', meals: 'Lunch, Dinner', stay: 'Camps' },
      { day: 2, title: 'Explore Kheerganga', description: 'Hot spring bath and relaxation', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Return to Kasol', description: 'Descend back to Kasol', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Light jacket', 'Trekking pants', 'Swimwear', 'Towel'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (3 pairs)', 'Slippers'] },
      { category: 'Essentials', items: ['Backpack (40L)', 'Sunscreen', 'Water bottle', 'Toiletries'] }
    ],
    faqs: [
      { question: 'Are the hot springs natural?', answer: 'Yes, natural hot water springs with healing properties.' },
      { question: 'Is it crowded?', answer: 'Can get busy on weekends, weekdays are quieter.' }
    ],
    cancellationPolicy: 'Free cancellation up to 7 days before trek. 50% refund for cancellations 3-6 days before. No refund within 3 days.'
  },
  {
    _id: '7',
    name: 'Har Ki Dun Trek',
    slug: 'har-ki-dun-trek',
    state: 'Uttarakhand',
    difficulty: 'Moderate',
    duration: '7 Days',
    altitude: '11,700 ft',
    bestSeason: ['April', 'May', 'June', 'September', 'October'],
    price: 11999,
    originalPrice: 15000,
    discount: 20,
    rating: 4.7,
    totalRatings: 145,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Har Ki Dun, meaning "Valley of Gods", is a cradle-shaped hanging valley in the Garhwal Himalayas. The trek offers stunning views of Swargarohini peaks and ancient villages.',
    included: ['Meals', 'Hotel Stay', 'Transportation', 'Pickup from Delhi'],
    pickupPoint: 'Delhi',
    pickupOptions: ['Delhi', 'Dehradun'],
    temperature: { day: '12°C to 18°C', night: '2°C to 8°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear'],
    itinerary: [
      { day: 1, title: 'Arrival in Sankri', description: 'Reach Sankri base camp', meals: 'Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Trek to Taluka', description: '12 km drive and trek', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Trek to Osla', description: 'Visit ancient Osla village', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Trek to Har Ki Dun', description: 'Reach the valley', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Explore Har Ki Dun', description: 'Day excursion to Jaundhar Glacier', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Return to Taluka', description: 'Descend to Taluka', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 7, title: 'Return to Sankri', description: 'Complete descent and departure', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Thermal wear', 'Fleece jacket', 'Down jacket', 'Trekking pants'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (4 pairs)', 'Sandals'] },
      { category: 'Essentials', items: ['Backpack (50L)', 'Sunscreen', 'Water bottle', 'First aid kit'] }
    ],
    faqs: [
      { question: 'Is it suitable for beginners?', answer: 'Moderate difficulty, good fitness required.' },
      { question: 'What makes it special?', answer: 'Ancient villages and mythological significance.' }
    ],
    cancellationPolicy: 'Free cancellation up to 15 days before trek. 50% refund for cancellations 7-14 days before. No refund within 7 days.'
  },
  {
    _id: '8',
    name: 'Brahmatal Trek',
    slug: 'brahmatal-trek',
    state: 'Uttarakhand',
    difficulty: 'Moderate',
    duration: '5 Days',
    altitude: '12,250 ft',
    bestSeason: ['December', 'January', 'February', 'March'],
    price: 9999,
    originalPrice: 13000,
    discount: 23,
    rating: 4.6,
    totalRatings: 98,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Brahmatal is a beautiful winter trek that offers stunning views of frozen lakes and snow-covered peaks. The trail passes through dense forests and offers panoramic Himalayan views.',
    included: ['Meals', 'Hotel Stay', 'Transportation'],
    pickupPoint: 'Kathgodam',
    pickupOptions: ['Kathgodam', 'Dehradun'],
    temperature: { day: '0°C to 5°C', night: '-8°C to -2°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear'],
    itinerary: [
      { day: 1, title: 'Arrival in Lohajung', description: 'Reach base camp', meals: 'Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Trek to Bekaltal', description: '8 km trek to Bekaltal', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Trek to Brahmatal', description: 'Reach Brahmatal lake', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Explore Brahmatal', description: 'Summit climb and exploration', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Return to Lohajung', description: 'Descend and departure', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Heavy thermal wear', 'Down jacket', 'Waterproof pants', 'Multiple layers'] },
      { category: 'Footwear', items: ['Waterproof trekking shoes', 'Gaiters', 'Socks (5 pairs)'] },
      { category: 'Essentials', items: ['Backpack (50L)', 'Crampons', 'Trekking poles', 'Sunglasses'] }
    ],
    faqs: [
      { question: 'Is it a winter trek?', answer: 'Yes, best done in winter for snow experience.' },
      { question: 'How cold does it get?', answer: 'Temperatures can drop to -10°C at night.' }
    ],
    cancellationPolicy: 'Free cancellation up to 15 days before trek. 50% refund for cancellations 7-14 days before. No refund within 7 days.'
  },
  {
    _id: '9',
    name: 'Beas Kund Trek',
    slug: 'beas-kund-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Easy',
    duration: '4 Days',
    altitude: '12,770 ft',
    bestSeason: ['May', 'June', 'September', 'October'],
    price: 6999,
    originalPrice: 9000,
    discount: 22,
    rating: 4.5,
    totalRatings: 167,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
    ],
    description: 'Beas Kund is the source of the Beas River and offers stunning views of the surrounding peaks. This easy trek is perfect for beginners and offers beautiful camping spots.',
    included: ['Meals', 'Hotel Stay', 'Transportation'],
    pickupPoint: 'Manali',
    pickupOptions: ['Manali', 'Delhi'],
    temperature: { day: '10°C to 15°C', night: '0°C to 5°C' },
    excluded: ['Personal expenses', 'Insurance'],
    itinerary: [
      { day: 1, title: 'Trek to Dhundi', description: '8 km trek from Solang Valley', meals: 'Lunch, Dinner', stay: 'Camps' },
      { day: 2, title: 'Trek to Beas Kund', description: 'Reach Beas Kund lake', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Explore Beas Kund', description: 'Day excursion around the lake', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Return to Manali', description: 'Descend back to Manali', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Light jacket', 'Trekking pants', 'T-shirts', 'Rain jacket'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (3 pairs)'] },
      { category: 'Essentials', items: ['Backpack (40L)', 'Sunscreen', 'Water bottle', 'Snacks'] }
    ],
    faqs: [
      { question: 'Is it suitable for beginners?', answer: 'Yes, perfect for first-time trekkers.' },
      { question: 'What is special about Beas Kund?', answer: 'It\'s the source of the Beas River with stunning views.' }
    ],
    cancellationPolicy: 'Free cancellation up to 7 days before trek. 50% refund for cancellations 3-6 days before. No refund within 3 days.'
  },
  {
    _id: '10',
    name: 'Chopta Tungnath Trek',
    slug: 'chopta-tungnath-trek',
    state: 'Uttarakhand',
    difficulty: 'Easy',
    duration: '3 Days',
    altitude: '12,100 ft',
    bestSeason: ['March', 'April', 'May', 'September', 'October', 'November'],
    price: 4999,
    originalPrice: 6500,
    discount: 23,
    rating: 4.7,
    totalRatings: 289,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Chopta is known as the "Mini Switzerland of India" and the trek to Tungnath Temple (highest Shiva temple) offers breathtaking views of Chaukhamba peaks.',
    included: ['Meals', 'Hotel Stay'],
    pickupPoint: 'Haridwar',
    pickupOptions: ['Haridwar', 'Rishikesh'],
    temperature: { day: '10°C to 15°C', night: '-2°C to 5°C' },
    excluded: ['Personal expenses', 'Transportation'],
    itinerary: [
      { day: 1, title: 'Trek to Chopta', description: 'Drive from Haridwar to Chopta', meals: 'Lunch, Dinner', stay: 'Camps' },
      { day: 2, title: 'Trek to Tungnath', description: 'Visit Tungnath temple and Chandrashila', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Return to Haridwar', description: 'Descend and drive back', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Warm jacket', 'Trekking pants', 'T-shirts'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (3 pairs)'] },
      { category: 'Essentials', items: ['Backpack (35L)', 'Sunscreen', 'Water bottle', 'Snacks'] }
    ],
    faqs: [
      { question: 'Is Tungnath temple accessible?', answer: 'Yes, it\'s the highest Shiva temple in the world.' },
      { question: 'How long is the trek?', answer: 'Approximately 3.5 km one way from Chopta.' }
    ],
    cancellationPolicy: 'Free cancellation up to 7 days before trek. 50% refund for cancellations 3-6 days before. No refund within 3 days.'
  },
  {
    _id: '11',
    name: 'Kashmir Great Lakes Trek',
    slug: 'kashmir-great-lakes-trek',
    state: 'Kashmir',
    difficulty: 'Difficult',
    duration: '8 Days',
    altitude: '13,750 ft',
    bestSeason: ['July', 'August', 'September'],
    price: 18999,
    originalPrice: 24000,
    discount: 21,
    rating: 4.9,
    totalRatings: 134,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'The Kashmir Great Lakes Trek is one of the most beautiful treks in India, passing through seven alpine lakes. The trail offers stunning meadows, snow-capped peaks, and crystal clear lakes.',
    included: ['Meals', 'Hotel Stay', 'Transportation', 'Pickup from Delhi'],
    pickupPoint: 'Srinagar',
    pickupOptions: ['Srinagar', 'Delhi'],
    temperature: { day: '12°C to 18°C', night: '2°C to 8°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear', 'Porter services'],
    itinerary: [
      { day: 1, title: 'Arrival in Srinagar', description: 'Reach Srinagar and briefing', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Drive to Sonamarg', description: 'Scenic drive to Sonamarg', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Trek to Nichnai', description: 'Trek to Nichnai Pass', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Trek to Vishansar', description: 'Reach Vishansar Lake', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Trek to Gadsar', description: 'Explore Gadsar Lake', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Trek to Satsar', description: 'Multiple lakes crossing', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 7, title: 'Trek to Gangabal', description: 'Reach Gangabal Lakes', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 8, title: 'Return to Srinagar', description: 'Descend and drive back', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Thermal wear', 'Fleece jacket', 'Down jacket', 'Waterproof pants'] },
      { category: 'Footwear', items: ['Waterproof trekking shoes', 'Gaiters', 'Socks (5 pairs)'] },
      { category: 'Essentials', items: ['Backpack (60L)', 'Trekking poles', 'Sunscreen', 'First aid kit'] }
    ],
    faqs: [
      { question: 'Is it difficult?', answer: 'Difficult trek requiring good fitness and prior experience.' },
      { question: 'How many lakes?', answer: 'You\'ll see 7 beautiful alpine lakes on this trek.' }
    ],
    cancellationPolicy: 'Free cancellation up to 20 days before trek. 50% refund for cancellations 10-19 days before. No refund within 10 days.'
  },
  {
    _id: '12',
    name: 'Nag Tibba Trek',
    slug: 'nag-tibba-trek',
    state: 'Uttarakhand',
    difficulty: 'Easy',
    duration: '2 Days',
    altitude: '9,915 ft',
    bestSeason: ['January', 'February', 'March', 'April', 'May', 'November', 'December'],
    price: 2499,
    originalPrice: 3500,
    discount: 29,
    rating: 4.4,
    totalRatings: 378,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Nag Tibba is the highest peak in the lesser Himalayan region and offers a perfect weekend getaway. The trek provides stunning views of Bandarpunch and Kedarnath peaks.',
    included: ['Meals', 'Hotel Stay'],
    pickupPoint: 'Dehradun',
    pickupOptions: ['Dehradun', 'Mussoorie'],
    temperature: { day: '12°C to 18°C', night: '5°C to 10°C' },
    excluded: ['Personal expenses', 'Transportation'],
    itinerary: [
      { day: 1, title: 'Trek to Nag Tibba Base', description: '8 km trek from Pantwari', meals: 'Lunch, Dinner', stay: 'Camps' },
      { day: 2, title: 'Summit and Return', description: 'Early morning summit and descent', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Light jacket', 'Trekking pants', 'T-shirts'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (2 pairs)'] },
      { category: 'Essentials', items: ['Backpack (30L)', 'Sunscreen', 'Water bottle', 'Snacks'] }
    ],
    faqs: [
      { question: 'Is it suitable for beginners?', answer: 'Yes, perfect for first-time trekkers.' },
      { question: 'How long is the trek?', answer: 'Approximately 8 km one way, takes 4-5 hours.' }
    ],
    cancellationPolicy: 'Free cancellation up to 5 days before trek. 50% refund for cancellations 2-4 days before. No refund within 2 days.'
  },
  {
    _id: '13',
    name: 'Pin Parvati Pass Trek',
    slug: 'pin-parvati-pass-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Challenging',
    duration: '11 Days',
    altitude: '17,450 ft',
    bestSeason: ['July', 'August', 'September'],
    price: 24999,
    originalPrice: 30000,
    discount: 17,
    rating: 4.8,
    totalRatings: 67,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
    ],
    description: 'Pin Parvati Pass is a challenging high-altitude trek connecting the lush Parvati Valley to the arid Spiti Valley. The trek offers dramatic landscape changes and stunning glacier views.',
    included: ['Meals', 'Hotel Stay', 'Transportation', 'Pickup from Delhi'],
    pickupPoint: 'Manali',
    pickupOptions: ['Manali', 'Delhi'],
    temperature: { day: '5°C to 12°C', night: '-5°C to 2°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear', 'Porter services'],
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Reach Manali and briefing', meals: 'Dinner', stay: 'Hotel' },
      { day: 2, title: 'Trek to Kheerganga', description: 'Trek to Kheerganga', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Trek to Tunda Bhuj', description: 'Gradual ascent', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Trek to Thakur Kuan', description: 'Continue ascent', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Trek to Mantalai Lake', description: 'Reach Mantalai Lake', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Trek to Base Camp', description: 'Reach pass base camp', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 7, title: 'Cross Pin Parvati Pass', description: 'Cross the pass to Spiti', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 8, title: 'Trek to Mudh Village', description: 'Descend to Mudh', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 9, title: 'Drive to Kaza', description: 'Scenic drive to Kaza', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel' },
      { day: 10, title: 'Explore Kaza', description: 'Local sightseeing', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel' },
      { day: 11, title: 'Return to Manali', description: 'Drive back to Manali', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Heavy thermal wear', 'Down jacket', 'Waterproof pants', 'Multiple layers'] },
      { category: 'Footwear', items: ['High ankle trekking shoes', 'Gaiters', 'Socks (6 pairs)'] },
      { category: 'Essentials', items: ['Backpack (70L)', 'Crampons', 'Ice axe', 'Trekking poles', 'First aid kit'] }
    ],
    faqs: [
      { question: 'Is it suitable for beginners?', answer: 'No, this is a challenging trek requiring prior high-altitude experience.' },
      { question: 'What makes it special?', answer: 'The dramatic transition from lush green to arid desert landscapes.' }
    ],
    cancellationPolicy: 'Free cancellation up to 30 days before trek. 50% refund for cancellations 15-29 days before. No refund within 15 days.'
  },
  {
    _id: '14',
    name: 'Dayara Bugyal Trek',
    slug: 'dayara-bugyal-trek',
    state: 'Uttarakhand',
    difficulty: 'Easy',
    duration: '5 Days',
    altitude: '11,683 ft',
    bestSeason: ['December', 'January', 'February', 'March', 'April', 'May'],
    price: 7999,
    originalPrice: 10000,
    discount: 20,
    rating: 4.6,
    totalRatings: 156,
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1504198458649-3128b932f49e?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Dayara Bugyal is one of the most beautiful high-altitude meadows in Uttarakhand. The winter trek offers stunning snow-covered landscapes while summer brings lush green meadows.',
    included: ['Meals', 'Hotel Stay', 'Transportation'],
    pickupPoint: 'Haridwar',
    pickupOptions: ['Haridwar', 'Dehradun'],
    temperature: { day: '8°C to 15°C', night: '-3°C to 5°C' },
    excluded: ['Personal expenses', 'Insurance'],
    itinerary: [
      { day: 1, title: 'Trek to Barsu', description: 'Drive from Haridwar to Barsu', meals: 'Lunch, Dinner', stay: 'Guesthouse' },
      { day: 2, title: 'Trek to Barnala', description: '8 km trek to Barnala', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 3, title: 'Trek to Dayara Bugyal', description: 'Reach the meadows', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 4, title: 'Explore Dayara', description: 'Day excursion around meadows', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Return to Haridwar', description: 'Descend and drive back', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Warm jacket', 'Trekking pants', 'T-shirts', 'Rain jacket'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (4 pairs)'] },
      { category: 'Essentials', items: ['Backpack (45L)', 'Sunscreen', 'Water bottle', 'Snacks'] }
    ],
    faqs: [
      { question: 'Is it good in winter?', answer: 'Yes, winter offers beautiful snow-covered meadows.' },
      { question: 'How difficult is it?', answer: 'Easy to moderate, suitable for beginners.' }
    ],
    cancellationPolicy: 'Free cancellation up to 10 days before trek. 50% refund for cancellations 5-9 days before. No refund within 5 days.'
  },
  {
    _id: '15',
    name: 'Spiti Valley Trek',
    slug: 'spiti-valley-trek',
    state: 'Himachal Pradesh',
    difficulty: 'Moderate',
    duration: '9 Days',
    altitude: '15,000 ft',
    bestSeason: ['June', 'July', 'August', 'September', 'October'],
    price: 21999,
    originalPrice: 28000,
    discount: 21,
    rating: 4.8,
    totalRatings: 112,
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    ],
    description: 'Spiti Valley, meaning "The Middle Land", is a cold desert mountain valley located high in the Himalayas. The trek offers ancient monasteries, pristine lakes, and dramatic landscapes.',
    included: ['Meals', 'Hotel Stay', 'Transportation', 'Pickup from Delhi'],
    pickupPoint: 'Manali',
    pickupOptions: ['Manali', 'Delhi'],
    temperature: { day: '15°C to 22°C', night: '5°C to 10°C' },
    excluded: ['Personal expenses', 'Insurance', 'Any personal gear'],
    itinerary: [
      { day: 1, title: 'Drive from Manali to Kaza', description: 'Scenic drive via Rohtang Pass', meals: 'Lunch, Dinner', stay: 'Hotel' },
      { day: 2, title: 'Explore Kaza', description: 'Visit Key Monastery', meals: 'Breakfast, Lunch, Dinner', stay: 'Hotel' },
      { day: 3, title: 'Visit Kibber', description: 'Highest village with motorable road', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 4, title: 'Visit Chandratal Lake', description: 'Beautiful moon-shaped lake', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 5, title: 'Explore Chandratal', description: 'Day around the lake', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 6, title: 'Visit Kunzum Pass', description: 'High mountain pass', meals: 'Breakfast, Lunch, Dinner', stay: 'Camps' },
      { day: 7, title: 'Visit Losar Village', description: 'First village of Spiti', meals: 'Breakfast, Lunch, Dinner', stay: 'Guesthouse' },
      { day: 8, title: 'Drive to Manali', description: 'Return journey via Rohtang', meals: 'Breakfast, Lunch', stay: 'Hotel' },
      { day: 9, title: 'Departure', description: 'Depart from Manali', meals: 'Breakfast', stay: '-' }
    ],
    packingList: [
      { category: 'Clothing', items: ['Warm jacket', 'Trekking pants', 'T-shirts', 'Windproof jacket'] },
      { category: 'Footwear', items: ['Trekking shoes', 'Socks (4 pairs)', 'Sandals'] },
      { category: 'Essentials', items: ['Backpack (50L)', 'Sunscreen', 'Sunglasses', 'Water bottle', 'First aid kit'] }
    ],
    faqs: [
      { question: 'Is it a trek or road trip?', answer: 'It\'s a mix of driving and short treks to various locations.' },
      { question: 'What makes Spiti special?', answer: 'Ancient monasteries, pristine lakes, and unique cold desert landscape.' }
    ],
    cancellationPolicy: 'Free cancellation up to 15 days before trek. 50% refund for cancellations 7-14 days before. No refund within 7 days.'
  }
]
