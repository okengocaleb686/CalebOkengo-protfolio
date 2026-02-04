# CALEB OKENGO - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Inspired by the timokama.github.io portfolio design.

## 🌐 Live Demo

Visit the live version: [https://calebokengo.github.io/portfolio](https://calebokengo.github.io/portfolio)

## ✨ Features

### Core Features
- **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI** - Clean and professional appearance with smooth animations
- **Mobile-Friendly** - Hamburger menu for mobile navigation
- **Smooth Scroll** - Navigation links scroll smoothly to sections
- **Animated Elements** - Cards and sections animate on scroll
- **Typing Effect** - Animated hero text with multiple roles
- **Scroll to Top** - Floating button to quickly return to the top
- **Preloader** - Clean loading animation
- **Accessible** - Proper ARIA labels and semantic HTML

### Advanced Features
- **Dark/Light Mode Toggle** - Switch between themes with persistence
- **Project Filtering** - Filter projects by category (Frontend, Backend, Full Stack)
- **Contact Form** - Functional form with validation and localStorage storage
- **Visitor Counter** - Tracks page views using localStorage
- **Dynamic Project Rendering** - Projects loaded from JavaScript data object
- **Skill Progress Animation** - Animated progress bars
- **Active Navigation Highlighting** - Automatically highlights current section

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, flexbox, and grid
- **JavaScript** - Vanilla JS for interactivity and animations
- **Font Awesome** - For icons
- **Google Fonts** - Poppins font family
- **localStorage** - For data persistence (theme, messages, visitor count)

## 📂 Project Structure

```
portfolio/
├── index.html       # Main HTML file
├── style.css        # Main stylesheet
├── script.js        # JavaScript for interactivity
├── README.md        # Project documentation
└── assets/
    └── icons/       # Favicon and other icons
```

## 🚀 Getting Started

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/calebokengo/portfolio.git
   ```

2. Open the project folder:
   ```bash
   cd portfolio
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

4. Visit `http://localhost:8000` in your browser

### Customization

#### Update Personal Information

Edit `script.js` and update the `portfolioData` object:
```javascript
const portfolioData = {
  name: 'Your Name',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  projects: [
    {
      id: 1,
      title: 'Project Name',
      description: 'Project description',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      live: '#',
      icon: 'fa-laptop-code'
    }
  ]
};
```

#### Change Colors

Edit `style.css` and modify the CSS variables:
```css
:root {
  --primary-color: #3498db;    /* Change to your primary color */
  --secondary-color: #2c3e50;  /* Change to your secondary color */
  --accent-color: #00a8ff;     /* Change to your accent color */
}
```

#### Add New Projects

Add projects to the `portfolioData.projects` array in `script.js`:
```javascript
projects: [
  {
    id: 5,
    title: 'New Project',
    description: 'Description of your new project',
    tags: ['React', 'Node.js'],
    github: '#',
    live: '#',
    icon: 'fa-project-diagram'
  }
]
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 💾 Data Storage

The portfolio uses localStorage for:
- **Theme Preference**: Saves dark/light mode choice
- **Messages**: Stores contact form submissions
- **Visitor Count**: Tracks total page views

### Access Stored Data

Open browser console and run:
```javascript
// Get theme preference
localStorage.getItem('theme')

// Get visitor count
localStorage.getItem('visitorCount')

// Get all messages
JSON.parse(localStorage.getItem('portfolioMessages'))
```

## 🎨 Design Features

- CSS Variables for easy customization
- CSS Grid for responsive layouts
- Flexbox for alignment
- Smooth transitions and hover effects
- Box shadows for depth
- Border radius for modern look
- Intersection Observer for scroll animations

## 📧 Contact Form

The contact form saves messages to localStorage. Messages can be accessed via:
```javascript
JSON.parse(localStorage.getItem('portfolioMessages'))
```

Each message contains:
- Name
- Email
- Subject
- Message
- Timestamp

## 🏗️ Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push the portfolio folder:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/calebokengo/portfolio.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages → Deploy from main branch
4. Your site will be live at `https://calebokengo.github.io/portfolio`

### Netlify

1. Drag and drop the portfolio folder onto Netlify
2. Your site will be deployed instantly

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: [okengocaleb411@gmail.com](mailto:okengocaleb411@gmail.com)
- **GitHub**: [github.com/kengo2](https://github.com/kengo2)
- **LinkedIn**: [linkedin.com/in/caleb-okengo](https://linkedin.com/in/caleb-okengo)
- **WhatsApp**: [wa.me/0114995010](https://wa.me/0114995010)

---

Built with ❤️ using HTML, CSS & JavaScript
