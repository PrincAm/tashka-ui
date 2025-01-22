# Tashka.cz - Modern E-commerce Platform

![Tashka.cz Homepage](https://res.cloudinary.com/dznxs2k2a/image/upload/v1737449194/tashka/homepage_vtfi3b.png)

[Live Demo](https://tashka-ui.vercel.app/)

## Overview

Tashka.cz is a modern e-commerce platform specializing in stylish bags for women, men, and kids. Built with Next.js 14 and featuring a sleek, responsive design, the platform offers an intuitive shopping experience with a focus on visual appeal and user convenience.

## Features

- 🛍️ **Modern E-commerce Experience**
  - Responsive product grid with hover effects
  - Detailed product pages with image carousels
  - Quick view functionality
  - Advanced filtering and sorting options

- 🛒 **Shopping Cart**
  - Real-time cart updates
  - Quantity adjustment
  - Persistent cart state
  - Smooth animations

- 📱 **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts
  - Touch-friendly interfaces
  - Optimized images

- ⚡ **Performance**
  - Server-side rendering
  - Image optimization
  - Lazy loading
  - Route prefetching

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context
- **Payment Processing**: Stripe
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tashka-ui.git

2. Install dependencies:
   ```bash
   npm install

3. Create a `.env.local` file with the following variables::
   ```bash
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key

4. Install dependencies:
   ```bash
   npm run dev
   
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```plaintext
tashka-ui/
├── app/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   └── pages/
├── public/
└── styles/
```

## Key Components

- **ProductCard**: Displays individual products with hover effects and quick view
- **ProductDetail**: Shows detailed product information with image carousel
- **Cart**: Manages shopping cart functionality
- **Checkout**: Handles the checkout process
- **Layout**: Provides consistent page structure

## Pages

- `/`: Homepage with featured products
- `/products`: Product listing page
- `/products/[id]`: Individual product pages
- `/cart`: Shopping cart
- `/checkout`: Checkout process
- `/success`: Order confirmation
- `/faqs`: Frequently asked questions
- `/shipping-returns`: Shipping and returns policy
- `/size-guide`: Size guide
- `/care-instructions`: Product care instructions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

For any inquiries, please reach out to us at [support@tashka.cz](mailto:support@tashka.cz)

---

Made with ❤️ by Adam