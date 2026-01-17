# 🎓 Phishing Awareness Demo - OnlyFans Clone

> **⚠️ EDUCATIONAL PURPOSE ONLY**  
> This project is designed to demonstrate how phishing attacks work and teach users about online security. NO real credentials are captured or transmitted.

## 🎯 Purpose

This is an educational tool that replicates the OnlyFans login page to demonstrate:
- How convincing fake login pages can appear
- The importance of verifying URLs before entering credentials
- How easily users can be tricked by phishing attacks
- Best practices for online security

## ✨ Features

- **Exact visual replica** of OnlyFans login page
- **Educational reveal** - Shows "You've been pwned" message after form submission
- **No data capture** - Credentials are never stored or transmitted
- **Mobile responsive** design
- **Smooth animations** and transitions
- **Clear disclaimers** about the educational nature of the demo

## 🛠️ Tech Stack

- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - No frameworks needed
- **CSS3** - Modern styling with animations
- **HTML5** - Semantic markup

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sussy-fans
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deploy to Vercel

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Method 2: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Vercel Configuration

The project is pre-configured for Vercel. The build command is `npm run build` and the output directory is `dist`.

## 📋 How It Works

1. **User enters credentials** - The form accepts any email/username and password
2. **Form submission** - JavaScript prevents actual submission
3. **Reveal message** - The login form fades out and a "pwned" message appears
4. **Educational content** - Clear explanation of what just happened and why it matters
5. **Reset option** - Users can try again to see the effect multiple times

## 🔒 Security & Privacy

- **NO data storage** - Nothing is saved to any database
- **NO network requests** - Credentials are not sent anywhere
- **Client-side only** - All logic runs in the browser
- **Educational disclaimers** - Clear warnings throughout the page

## ⚠️ Important Disclaimers

- This is for **educational purposes only**
- Use responsibly to teach about online security
- Do not use to deceive or harm others
- Always include prominent educational disclaimers
- Comply with all applicable laws and regulations

## 🎨 Customization

You can customize the reveal message by editing:
- `/index.html` - The pwned message content
- `/src/style.css` - Styling and animations
- `/src/main.js` - JavaScript behavior

## 📝 License

This project is for educational purposes only. Use responsibly.

## 🤝 Contributing

Contributions to improve the educational value are welcome! Please ensure:
- Maintain clear educational disclaimers
- Do not add actual data capture mechanisms
- Keep the focus on security awareness

## 📧 Contact

For questions about this educational tool, please open an issue.

---

**Remember:** Always verify URLs, use unique passwords, and enable two-factor authentication! 🔐
