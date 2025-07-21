# 🏠 HelpMate - Home Services Platform

<div align="center">
 <a href="https://balram04.github.io/HelpMate/"> Live Demo</a>
</div>

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Pages Overview](#pages-overview)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

**HelpMate** is a modern, responsive home services platform that connects customers with quality service providers. Our platform specializes in home maintenance, beauty services, and professional care with a focus on reliability and customer satisfaction.

### 🌟 Mission
To provide convenient, reliable, and professional home services that make life easier for our customers while supporting local service providers.

### 👨‍💼 Founded by
**Balram Singh** - A passionate entrepreneur dedicated to revolutionizing the home services industry through technology and quality service delivery.

## ✨ Features

### 🏠 **Homepage**
- Modern responsive design with dark gradient theme
- Service category showcase
- Company information and mission
- Mobile-first responsive layout
- Professional navbar with cart integration

### 💇‍♂️ **Men's Salon Services**
- Comprehensive grooming service listings
- Interactive service cards with pricing
- Real-time cart functionality
- Horizontal card layout for better UX
- Filter and search capabilities

### 🛒 **Shopping Cart System**
- Add/remove services seamlessly
- Real-time cart count updates
- Quantity management
- Price calculations
- Persistent cart data (localStorage)

### 💳 **Payment Processing**
- Secure payment flow
- Order summary display
- Multiple payment options
- Order confirmation system

### 📱 **Mobile Responsive**
- Fully optimized for mobile devices
- Touch-friendly interface
- Responsive grid layouts
- Mobile-first design approach

### 🎨 **Modern UI/UX**
- Dark gradient theme throughout
- Glass morphism design elements
- Smooth animations and transitions
- Professional typography (Poppins font)
- Consistent color scheme

## 🛠 Tech Stack

### **Frontend Technologies**
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with flexbox/grid
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework

### **Design & Styling**
- **Dark Gradient Theme** - `linear-gradient(135deg, #111827 0%, #374151 50%, #000000 100%)`
- **Glass Morphism** - Backdrop blur effects
- **Google Fonts** - Poppins typography
- **Font Awesome** - Icon library
- **Responsive Design** - Mobile-first approach

### **Data Management**
- **localStorage API** - Client-side cart persistence
- **JSON** - Data structure for services/products
- **Dynamic DOM** - Real-time content updates

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Code editor (VS Code recommended)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/HelpMate.git
   cd HelpMate
   ```

2. **Open in your preferred code editor**
   ```bash
   code .
   ```

3. **Launch the application**
   - Open `index.html` in your browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:8000`

## 📁 Project Structure

```
HelpMate/
├── 📄 index.html              # Homepage - main landing page
├── 📄 about.html              # About company and founder
├── 📄 product.html            # Men's salon services page
├── 📄 prePayment.html         # Cart summary and checkout
├── 📄 payment.html            # Payment processing page
├── 📄 blog.html               # Blog/articles page
├── 📄 cart.html               # Shopping cart page
├── 📄 Track.html              # Order tracking
├── 📄 otpPage.html            # OTP verification
├── 🎨 homepage.css            # Homepage styles
├── 🎨 product.css             # Product page and shared styles
├── 🎨 payment.css             # Payment page styles
├── 🎨 about.css               # About page styles
├── ⚡ product.js              # Product functionality and cart
├── ⚡ prePayment.js           # Cart management and calculations
├── ⚡ payment.js              # Payment processing logic
├── ⚡ login.js                # Authentication logic
├── 🖼️ men haircut.jpg         # Service images
├── 🎥 ads.mp4                 # Promotional content
└── 📖 README.md               # Project documentation
```

## 📊 Pages Overview

### 🏠 **Homepage (`index.html`)**
- Hero section with company branding
- Service categories grid
- About section with company info
- Responsive navbar with cart
- Call-to-action buttons

### 💇‍♂️ **Services Page (`product.html`)**
- Men's salon service listings
- Interactive service cards
- Add to cart functionality
- Real-time cart updates
- Navigation header

### 🛒 **Cart & Checkout (`prePayment.html`)**
- Cart items display
- Quantity controls
- Price calculations
- Checkout preparation
- Order summary

### 💳 **Payment (`payment.html`)**
- Secure payment forms
- Order confirmation
- Payment method selection
- Final order processing

### ℹ️ **About (`about.html`)**
- Company story and mission
- Founder information
- Service commitment
- Contact information

## 🎨 Key Features Implemented

### **Responsive Design**
- ✅ Mobile-first approach
- ✅ Flexible grid layouts
- ✅ Touch-friendly interfaces
- ✅ Optimized images and media

### **Cart Functionality**
- ✅ Add/remove items
- ✅ Quantity management
- ✅ Real-time updates
- ✅ Persistent storage
- ✅ Cross-page synchronization

### **Modern UI/UX**
- ✅ Dark gradient theme
- ✅ Glass morphism effects
- ✅ Smooth animations
- ✅ Professional typography
- ✅ Consistent styling

### **Performance Optimization**
- ✅ Optimized images
- ✅ Efficient CSS
- ✅ Fast loading times
- ✅ Mobile performance

## 🔧 Customization

### **Color Scheme**
The project uses a consistent dark theme:
```css
/* Primary gradient */
background: linear-gradient(135deg, #111827 0%, #374151 50%, #000000 100%);

/* Accent colors */
--primary-blue: #3B82F6;
--success-green: #10B981;
--text-white: #FFFFFF;
--gray-800: #1F2937;
```

### **Typography**
- Primary font: Poppins (Google Fonts)
- Fallback: system fonts
- Font weights: 400, 500, 600

## 🚀 Deployment

### **GitHub Pages**
1. Push your code to GitHub
2. Go to repository Settings
3. Scroll to Pages section
4. Select source branch (main)
5. Your site will be available at `https://yourusername.github.io/HelpMate`

### **Netlify**
1. Connect your GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/`
4. Deploy automatically on push

### **Vercel**
1. Import GitHub repository
2. No build configuration needed
3. Deploy with automatic HTTPS

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Code Style Guidelines**
- Use consistent indentation (2 spaces)
- Follow semantic HTML structure
- Use meaningful CSS class names
- Comment complex JavaScript functions
- Maintain responsive design principles

## 📞 Contact

**Balram Singh** - Project Founder & Developer
- GitHub: [@Balram04](https://github.com/yourusername)
- Email: Balram@helpmate.com

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **Font Awesome** for the icon library
- **Google Fonts** for typography
- **Unsplash/Freepik** for placeholder images
- **VS Code** for development environment

---

<div align="center">
  <p>Made with ❤️ by Balram Prajapati</p>
  <p>© 2025 HelpMate. All rights reserved.</p>
</div>
