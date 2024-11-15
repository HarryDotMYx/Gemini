# AI Content Generator

A modern, production-ready React application that leverages Google's Gemini API to generate AI content. Built with performance, accessibility, and user experience in mind.

![AI Content Generator](https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=400)

## ✨ Features

- 🎨 Modern, responsive UI with smooth animations
- 🌙 Dark/Light theme with system preference detection
- 🤖 Powered by Google's Gemini AI API
- 📝 Real-time content generation
- 💾 Session-based response history
- ⚡ Lightning-fast performance with Vite
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first design
- ♿ WCAG 2.1 compliant accessibility
- 🔒 Secure API key handling

## 🚀 Quick Start

1. **Clone and Install**

   ```bash
   git clone https://github.com/yourusername/ai-content-generator.git
   cd ai-content-generator
   npm install
   ```

2. **Environment Setup**

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your Gemini API credentials:

   ```env
   VITE_API_KEY=your_gemini_api_key_here
   VITE_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent
   ```

3. **Development**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 9+
- Gemini API key

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

## 🏗️ Project Structure

```
src/
├── components/     # React components
├── context/       # React context providers
├── services/      # API and other services
├── types/         # TypeScript types
├── config/        # Configuration files
└── styles/        # Global styles
```

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variables in Netlify dashboard
4. Deploy!

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` directory to any static hosting service

## 🔒 Security

- API keys are stored in environment variables
- Client-side-only architecture
- No sensitive data storage
- Input sanitization implemented

## 🎯 Best Practices

- ✅ Component-based architecture
- ✅ Custom hooks for logic reuse
- ✅ Responsive design patterns
- ✅ Performance optimization
- ✅ Error boundary implementation
- ✅ Proper TypeScript usage

## 📦 Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide Icons

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📝 License

MIT © PG Mohd Azhan Fikri

---

<div align="center">
Made with ❤️ by PG Mohd Azhan Fikri
</div>
