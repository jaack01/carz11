# GKP Auto - Car Dealership Website

## 🚗 About

GKP Auto is a modern, mobile-first car dealership website for Gorakhpur, Uttar Pradesh. Built with Next.js 15, TypeScript, and Supabase, it offers a seamless experience for buying and renting refurbished cars.

## ✨ Features

- 🎨 Modern, responsive design with dark/light mode
- 📱 Mobile-first approach
- 🗄️ **Real-time database integration with Supabase**
- 🚀 Optimized for static hosting (Hostinger Cloud)
- 🔍 SEO optimized
- ⚡ Lightning fast performance
- 🎭 Smooth animations with Framer Motion
- 📝 Blog system
- 💼 Car inventory management
- 📧 Contact form submissions

## 🏗️ Architecture

### Static Export + Dynamic Database

This project uses a **hybrid architecture**:

1. **Static HTML/JS Export** (for hosting)
   - Next.js generates static HTML files
   - JavaScript bundles include all client code
   - Deployed to Hostinger Cloud (no Node.js server needed)

2. **Client-Side Database Fetching** (for dynamic content)
   - Supabase client runs in the browser
   - Data fetched after page load via API calls
   - Real-time updates without rebuilding

### How It Works

```
User Visit → Static HTML loads (fast!) → JavaScript executes → Supabase API calls → Dynamic content displays
```

**Benefits:**
- ✅ Fast initial page load
- ✅ SEO friendly
- ✅ Dynamic content (no rebuild needed to update cars/blogs)
- ✅ Works on cheap static hosting
- ✅ Scales automatically

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + DaisyUI
- **Database:** Supabase (PostgreSQL)
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **SEO:** Next.js Metadata API + next-seo

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd gkp-auto
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your Supabase credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 📊 Database Schema

### Tables

#### 1. `cars`
Stores vehicle inventory with details:
- Basic info: brand, model, year, price
- Specs: mileage, horsepower, transmission, fuel type
- Media: images array
- Features: array of features
- Status: available/sold/reserved

#### 2. `blog_posts`
Blog articles with:
- Content: title, excerpt, full content
- Metadata: author, category, tags
- Publishing: published_at timestamp

#### 3. `testimonials`
Customer reviews:
- Customer info: name, role
- Review: content, rating (1-5)
- Media: customer image

#### 4. `contact_submissions`
Contact form submissions:
- Contact info: name, email, phone
- Message: subject, message content

### Database Management

**Add new car:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Open your project
3. Navigate to Table Editor > `cars`
4. Click "Insert Row"
5. Fill in car details
6. Save - **Website updates automatically!**

**No rebuild or redeployment needed!**

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#e53935", // Change main brand color
    // ... other shades
  },
}
```

### Logo

Replace `/img/logo.png` with your logo

### Contact Information

Update in:
- `components/header.tsx` - Phone/email in top bar
- `components/footer.tsx` - Footer contact details

## 📁 Project Structure

```
gkp-auto/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── header.tsx         # Header with navigation
│   ├── footer.tsx         # Footer
│   ├── car-card.tsx       # Car display card
│   └── home/              # Homepage sections
│       ├── hero-section.tsx
│       ├── featured-cars.tsx
│       ├── services-section.tsx
│       ├── why-choose-us.tsx
│       ├── latest-blog.tsx
│       └── cta-section.tsx
├── lib/                   # Utilities
│   ├── supabase.ts        # Supabase client & types
│   ├── utils.ts           # Helper functions
│   └── validations.ts     # Form schemas
├── types/                 # TypeScript types
│   └── index.ts
├── img/                   # Images/assets
└── public/                # Static files

```

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production (creates out/ folder)
npm run start    # Start production server (not needed for static hosting)
npm run lint     # Run ESLint
```

### Common Issues

**Issue: Dev server error with workUnitAsyncStorage**
- **Cause:** Next.js 15 bug with `output: "export"` in dev mode
- **Solution:** Already fixed in `next.config.ts` - export only happens in production

**Issue: Database not loading**
- **Check:** Environment variables in `.env`
- **Check:** Supabase project is active
- **Check:** Browser console for errors

## 🚀 Deployment to Hostinger

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick steps:**
1. `npm run build` - Creates `out/` folder
2. Upload `out/` contents to Hostinger `public_html/`
3. Ensure `.env` variables are set
4. Configure `.htaccess` for SPA routing

## 🔒 Security

- Environment variables are properly scoped (`NEXT_PUBLIC_*`)
- Supabase Row Level Security (RLS) enabled on all tables
- Only necessary data exposed to client
- CORS properly configured

## 📈 Performance

- **Homepage:** 208 kB First Load JS
- **404 Page:** 102 kB First Load JS
- Static generation for instant loading
- Code splitting
- Tree shaking
- Image optimization ready

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is proprietary and confidential.

## 🆘 Support

For support:
- **Website Issues:** Check browser console
- **Database Issues:** [Supabase Documentation](https://supabase.com/docs)
- **Next.js Issues:** [Next.js Documentation](https://nextjs.org/docs)

---

**GKP Auto** - Quality Refurbished Cars in Gorakhpur, Uttar Pradesh 🚗
