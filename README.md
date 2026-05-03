# Nelson Islamic Cultural Society Website

Official website for the Nelson Islamic Cultural Society in New Zealand. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🏠 Homepage with hero section and key information
- 📖 About Us page with mission and values
- ❓ FAQ page with accordion functionality
- 📧 Contact form with email notifications
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ WCAG 2.1 Level AA accessibility compliance
- 🚀 Optimized performance (Lighthouse score > 90)
- 🔒 Security best practices (HTTPS, CSRF protection, rate limiting)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **UI Components**: Headless UI
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saifxsaif/nz-islamic-org-platform.git
cd nz-islamic-org-platform
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
# Email Service (use either Resend or SendGrid)
RESEND_API_KEY=your_resend_api_key_here
# OR
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Contact Form
CONTACT_EMAIL=contact@nelsonislamicsociety.org.nz

# Site URL
NEXT_PUBLIC_SITE_URL=https://nelsonislamicsociety.org.nz
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm run start
```

### Linting and Formatting

Run ESLint:
```bash
npm run lint
```

Format code with Prettier:
```bash
npm run format
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Header with navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Hero section
│   ├── Card.tsx           # Card component
│   ├── ContactForm.tsx    # Contact form
│   └── FAQAccordion.tsx   # FAQ accordion
├── lib/                   # Utility functions
│   ├── validation.ts      # Form validation schemas
│   ├── email.ts           # Email sending utilities
│   └── metadata.ts        # SEO metadata
├── public/                # Static assets
└── .kiro/                 # Kiro spec files
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy!

Vercel will automatically:
- Build and deploy on push to main branch
- Create preview deployments for pull requests
- Provide HTTPS and global CDN
- Monitor performance with Vercel Analytics

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for email | Yes (or SendGrid) |
| `SENDGRID_API_KEY` | SendGrid API key for email | Yes (or Resend) |
| `CONTACT_EMAIL` | Email address to receive contact form submissions | Yes |
| `NEXT_PUBLIC_SITE_URL` | Production URL of the website | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC License

## Contact

Nelson Islamic Cultural Society
- Email: contact@nelsonislamicsociety.org.nz
- Website: https://nelsonislamicsociety.org.nz

---

Built with ❤️ by the Nelson Islamic Cultural Society community
