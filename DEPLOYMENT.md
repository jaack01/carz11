# GKP Auto - Deployment Guide for Hostinger Cloud

## Project Overview
This is a mobile-first Next.js 15 TypeScript application for GKP Auto car dealership in Gorakhpur, Uttar Pradesh.

## Prerequisites
- Node.js 18+ installed
- Supabase account (already configured)
- Hostinger Cloud hosting account

## Build & Deploy Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Build for Production
```bash
npm run build
```

This command:
- Compiles TypeScript
- Optimizes for production
- Generates static files in the `out` directory

### 3. Deploy to Hostinger Cloud

After building, upload the contents of the `out` folder to your Hostinger hosting:

**Option A: Using File Manager**
1. Log into Hostinger control panel
2. Navigate to File Manager
3. Go to `public_html` directory (or your domain's root folder)
4. Upload all files from the `out` folder
5. Ensure `.env` file with Supabase credentials is in the root

**Option B: Using FTP**
1. Connect to your Hostinger account via FTP
2. Navigate to `public_html`
3. Upload all files from `out` folder
4. Upload `.env` file

### 4. Configure Hostinger

**Set up .htaccess** (if not present):
Create a `.htaccess` file in your `public_html` with:
```apache
# Redirect all traffic to index.html for SPA routing
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 5. Environment Variables

Ensure your `.env` file contains:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

These are already configured in the current `.env` file.

### 6. DNS Configuration

Point your domain to Hostinger:
- Update your domain's nameservers to Hostinger's nameservers
- OR update A record to point to Hostinger's IP address

### 7. SSL Certificate

Enable SSL in Hostinger control panel:
1. Go to SSL section
2. Install Let's Encrypt SSL certificate
3. Force HTTPS redirect

## Post-Deployment Checklist

- [ ] Website loads correctly at your domain
- [ ] All images are displaying
- [ ] Navigation menu works
- [ ] Dark/Light mode toggle functions
- [ ] Car listings load from database
- [ ] Blog posts display correctly
- [ ] Contact form is accessible
- [ ] Mobile responsive design works
- [ ] SEO meta tags are present

## Maintenance

### Updating Content

**To add new cars:**
1. Access your Supabase dashboard
2. Go to Table Editor > cars
3. Insert new row with car details

**To add blog posts:**
1. Access Supabase dashboard
2. Go to Table Editor > blog_posts
3. Insert new row with blog content

### Updating the Website

When you make code changes:
```bash
npm run build
```

Then re-upload the `out` folder contents to Hostinger.

## Performance Optimization

The site is already optimized with:
- Static generation for fast loading
- Image optimization (unoptimized for static hosting)
- Code splitting
- Tree shaking
- Minification
- Gzip compression

## Support

For issues related to:
- **Hosting**: Contact Hostinger support
- **Database**: Check Supabase documentation
- **Code**: Review Next.js 15 documentation

## Technical Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 + DaisyUI
- **Database**: Supabase (PostgreSQL)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **SEO**: next-seo + Next.js Metadata API

## Production URLs

- Website: https://gkpauto.com (update with your domain)
- Database: https://dnwasqvenquvobnxoygo.supabase.co

---

**GKP Auto** - Quality Refurbished Cars in Gorakhpur, Uttar Pradesh
