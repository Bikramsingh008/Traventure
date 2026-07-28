<div align="center">

# 🏔️ Traventure

### Premium Adventure Travel & Trekking Platform

![Traventure Banner](https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=300&fit=crop)

**Explore the Himalayas with Confidence**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![License](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![Status](https://img.shields.io/badge/Status-Active-success.svg?style=for-the-badge)]()

---

**A modern, full-stack travel and trekking website built with React, Node.js, Express, and MongoDB. Traventure specializes in Himalayan trekking expeditions, hiking trips, camping experiences, and adventure activities in Uttarakhand and Himachal Pradesh.**

[🚀 Getting Started](#-getting-started) • [✨ Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [📸 Screenshots](#-screenshots) • [📡 API](#-api-documentation) • [🤝 Contributing](#-contributing)

</div>

---

## 🌟 About Traventure

<div align="center">
<img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" alt="Mountain Adventure" width="800">
</div>

Traventure is your gateway to the majestic Himalayas. We curate unforgettable trekking experiences across Uttarakhand and Himachal Pradesh, offering everything from easy weekend getaways to challenging high-altitude expeditions. Our platform connects adventure enthusiasts with certified guides, safe routes, and memorable experiences.

### 🎯 Our Mission
- Make Himalayan trekking accessible to everyone
- Provide safe, well-organized adventure experiences
- Promote sustainable and responsible tourism
- Create lasting memories in the lap of nature

### 📍 Destinations Covered
- **Uttarakhand**: Kedarkantha, Valley of Flowers, Roopkund, Har Ki Dun, and more
- **Himachal Pradesh**: Hampta Pass, Triund, Kheerganga, Spiti Valley, and more

---

## 🚀 Features

### 🎨 Frontend Features
- **Modern UI/UX**: Premium design with glassmorphism, smooth animations, and responsive layout
- **Dark/Light Mode**: Seamless theme switching with visible changes across all components
- **Animations**: Framer Motion for smooth scroll animations and micro-interactions
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Navigation**: Sticky header with smooth scrolling and mobile menu
- **Pages**: Home, About, Treks, Trek Detail, Contact, Gallery, Blog, Login, Signup, Profile, Admin Dashboard

### 🔧 Backend Features
- **REST API**: Express.js with proper error handling and validation
- **Authentication**: JWT-based authentication with bcrypt password hashing
- **Database**: MongoDB with Mongoose ODM
- **Security**: Helmet, CORS, rate limiting, and input validation
- **Seed Data**: Pre-populated with 18 trek packages from Uttarakhand and Himachal Pradesh

### 🎯 Key Functionality
- **Trek Browsing**: Filter by state, price, difficulty, duration, and season
- **Detailed Trek Pages**: Complete itinerary, pricing, and booking information
- **User Authentication**: Secure login/signup with profile management
- **Booking System**: Date selection, pricing calculation, and confirmation
- **Admin Dashboard**: Manage treks, bookings, and users
- **Review System**: Ratings with image uploads
- **Gallery**: Masonry layout for adventure photos
- **Blog**: Adventure articles and travel guides

---

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Framer Motion** - Animations
- **React Icons** - Icons
- **Axios** - HTTP client
- **React Hook Form** - Form management
- **Swiper.js** - Carousels
- **React Hot Toast** - Notifications

### Backend
- **Node.js** - Runtime
- **Express.js** - Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting
- **express-validator** - Input validation

## 📁 Project Structure

```
traventure/
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── context/
│   │   │   ├── ThemeContext.tsx
│   │   │   └── AuthContext.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Treks.tsx
│   │   │   ├── TrekDetail.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── Signup.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── AdminDashboard.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
└── backend/
    ├── models/
    │   ├── User.js
    │   ├── Trek.js
    │   ├── Booking.js
    │   └── Review.js
    ├── server.js
    ├── seed.js
    ├── package.json
    └── .env.example
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd traventure
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../backend
npm install
```

4. **Setup Environment Variables**
```bash
cd backend
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/traventure
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
```

5. **Start MongoDB**
Make sure MongoDB is running on your system:
```bash
# On Windows
net start MongoDB

# On Mac/Linux
sudo systemctl start mongod
# or
mongod
```

6. **Seed the Database**
```bash
npm run seed
```

This will populate the database with 18 trek packages from Uttarakhand and Himachal Pradesh.

### Running the Application

1. **Start Backend Server**
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:5000`

2. **Start Frontend Development Server**
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

### Building for Production

1. **Build Frontend**
```bash
cd frontend
npm run build
```

2. **Start Backend in Production**
```bash
cd backend
npm start
```

## 📡 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints

#### Register
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### Trek Endpoints

#### Get All Treks
```http
GET /api/treks
Query Parameters:
- state: Uttarakhand, Himachal Pradesh, etc.
- difficulty: Easy, Moderate, Difficult, Challenging
- minPrice: number
- maxPrice: number
- duration: string
- season: string
- search: string
- page: number
- limit: number
```

#### Get Featured Treks
```http
GET /api/treks/featured
```

#### Get Single Trek
```http
GET /api/treks/:id
```

#### Create Trek (Admin Only)
```http
POST /api/treks
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Trek Name",
  "slug": "trek-slug",
  "state": "Uttarakhand",
  "difficulty": "Moderate",
  "duration": "6 Days",
  "altitude": "12,500 ft",
  "bestSeason": ["December", "January"],
  "price": 8999,
  "originalPrice": 12999,
  "description": "Trek description",
  "images": ["image_url"],
  "itinerary": [...],
  "included": [...],
  "excluded": [...]
}
```

#### Update Trek (Admin Only)
```http
PUT /api/treks/:id
Authorization: Bearer <token>
```

#### Delete Trek (Admin Only)
```http
DELETE /api/treks/:id
Authorization: Bearer <token>
```

### Booking Endpoints

#### Create Booking
```http
POST /api/bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "trek": "trek_id",
  "bookingDate": "2024-12-01",
  "numberOfTravelers": 2,
  "travelers": [
    {
      "name": "John Doe",
      "age": 25,
      "gender": "Male",
      "idProof": "A12345678"
    }
  ],
  "pickupLocation": "Delhi",
  "pickupOption": "Volvo Bus",
  "specialRequests": "Vegetarian food"
}
```

#### Get User Bookings
```http
GET /api/bookings/my-bookings
Authorization: Bearer <token>
```

#### Get All Bookings (Admin Only)
```http
GET /api/bookings
Authorization: Bearer <token>
```

#### Update Booking Status (Admin Only)
```http
PUT /api/bookings/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
  "bookingStatus": "confirmed"
}
```

### Review Endpoints

#### Create Review
```http
POST /api/reviews
Authorization: Bearer <token>
Content-Type: application/json

{
  "trek": "trek_id",
  "rating": 5,
  "title": "Amazing experience!",
  "comment": "The trek was wonderful...",
  "images": ["image_url"]
}
```

#### Get Trek Reviews
```http
GET /api/reviews/trek/:trekId
```

#### Get User Reviews
```http
GET /api/reviews/my-reviews
Authorization: Bearer <token>
```

### User Endpoints

#### Get Profile
```http
GET /api/users/profile
Authorization: Bearer <token>
```

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Name",
  "phone": "+91 98765 43210"
}
```

#### Add to Wishlist
```http
POST /api/users/wishlist
Authorization: Bearer <token>
Content-Type: application/json

{
  "trek": "trek_id"
}
```

#### Get Wishlist
```http
GET /api/users/wishlist
Authorization: Bearer <token>
```

## 🎨 Brand Guidelines

### Colors
- **Primary Green**: #2D5A27 (Forest Green)
- **Primary Blue**: #4A90E2 (Sky Blue)
- **Primary Orange**: #FF6B35 (Sunrise Orange)
- **Light**: #F8F9FA
- **Dark**: #1A1A2E

### Logo
The Traventure logo features:
- Mountains with snow caps
- Curved trail/path
- Pine trees
- Sunrise/sun element
- Adventure feel
- Works on light and dark backgrounds

## 📝 Trek Packages

### Uttarakhand Treks
1. Kedarkantha Trek
2. Har Ki Dun Trek
3. Valley of Flowers Trek
4. Chopta Tungnath Trek
5. Brahmatal Trek
6. Roopkund Trek
7. Nag Tibba Trek
8. Dayara Bugyal Trek
9. Kuari Pass Trek
10. Kedarnath Trek

### Himachal Pradesh Treks
1. Hampta Pass
2. Triund Trek
3. Bhrigu Lake Trek
4. Pin Parvati Pass
5. Beas Kund Trek
6. Kheerganga Trek
7. Sar Pass Trek
8. Indrahar Pass Trek

## 🔐 Security Features

- JWT Authentication
- Password hashing with bcrypt
- Rate limiting (100 requests per 15 minutes)
- Helmet for security headers
- CORS configuration
- Input validation with express-validator
- Protected admin routes

## 🚧 Future Enhancements

- Payment gateway integration (Razorpay/Stripe)
- Email notifications
- Real-time chat support
- Video testimonials
- Virtual trek previews
- Multi-language support
- Mobile app (React Native)
- Advanced analytics dashboard

## 📄 License

This project is licensed under the ISC License.

## 👥 Team

Traventure Development Team

## 📞 Contact

- **Email**: info@traventure.com
- **Phone**: +91 98765 43210
- **Address**: 123 Adventure Street, Delhi, India

## 🙏 Acknowledgments

- Trek The Himalayas for inspiration
- IndiaHikes for design reference
- Unsplash for beautiful images
- Open source community

---

Built with ❤️ by Traventure Team
