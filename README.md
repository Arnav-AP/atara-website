# 🌿 Atara — Inspire With Impact

**Atara** is a student-led social impact initiative under the IB Service as Action Programme at **Fountainhead Wockhardt Global School, Aurangabad**. We turn student creativity into meaningful community action across education, animal welfare, healthcare, awareness, and community development.

---

## 👨‍💻 Design, Development & Maintenance

This website was **fully designed, developed, and is actively maintained by [Arnav Pardeshi](https://github.com/arnavpardeshi)** — a student volunteer at Atara and the driving force behind its digital presence.

- **Design:** Every layout, animation, interaction and visual detail
- **Development:** Full-stack implementation using TanStack Start, React, TypeScript, Tailwind CSS, Framer Motion & Lenis
- **Maintenance:** Ongoing updates, performance optimisation, bug fixes, and feature additions
- **Email integration:** Contact form sends real emails via Nodemailer + Gmail SMTP

Built with care, curiosity, and a commitment to making impact accessible through great design.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (Meta-framework over Vite) |
| Frontend | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion, Lenis (smooth scroll) |
| Routing | TanStack Router (file-based) |
| Email | Nodemailer + Gmail SMTP |
| Hosting | Cloudflare (via Nitro) |

---

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env
# Edit .env with your Gmail credentials (see below)

# Start dev server
npx vite dev --port 8080
```

### Email Setup

The contact form sends emails via Gmail SMTP. To enable it:

1. Enable [App Passwords](https://myaccount.google.com/apppasswords) in your Google Account
2. Create a `.env` file:
   ```env
   GMAIL_USER=atara.wgs@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   ```

---

## 📁 Project Structure

```
src/
├── assets/          # Images, static assets
├── components/
│   ├── site/        # Layout components (nav, footer, cursor, etc.)
│   └── ui/          # Shared UI primitives
├── hooks/           # Custom React hooks
├── lib/             # Content data, utilities, email server function
└── routes/          # TanStack Router file-based routes
public/              # Static files (favicon, sitemap, team photos)
```

---

## 📄 License & Usage

This project is the digital presence of the Atara student initiative.  
Feel free to explore and draw inspiration — but please reach out before reusing substantial portions.

---

*"Small hands. Lasting impact."*
