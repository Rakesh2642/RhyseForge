# ⚡ RhyseForge — Certification Exam Preparation Platform

> **AI-Powered Exam Simulation Engine** for mastering professional certifications.  
> Practice, compete, and certify — all in one premium SaaS platform.

---

## 🎯 What is RhyseForge?

RhyseForge is a full-stack, production-grade **certification exam preparation platform** designed for IT professionals preparing for industry certifications like:

- 🟠 **Databricks Data Engineer Associate** (PR000054)
- 🟡 **AWS Certified AI Practitioner** (AIF-C01)
- 🔵 **Databricks Gen AI Engineer Associate** (PR000065)
- 🟢 **SAP ABAP Cloud Back-End Developer** (C_ABAPD)

The platform includes a complete **Admin Panel** to manage exams, an **AI-Powered Question Parser** for bulk ingestion, and a **real-time competitive leaderboard** — everything needed to run a professional exam preparation business.

> [!IMPORTANT]
> **Mandatory Authentication**: To maintain platform integrity and security, all core interactions (Practice, Mock Exams, Leaderboard, etc.) require an active user session. Unauthenticated users will be automatically redirected to the secure login page.

---

## ✨ Key Features

### 🎓 For Students
| Feature | Description |
|---|---|
| **Practice Mode** | Unlimited attempts with instant answer feedback (Limited to 2 questions for Free accounts) |
| **Mock Exam Mode** | Timed simulation with auto-submit (Limited to 2 questions for Free accounts) |
| **Performance Dashboard** | Track exam history, average score, and certification readiness |
| **Profile Management** | Custom profile picture upload, name editing, and identity management |
| **Global Leaderboard** | Compete with other candidates worldwide via the "Hall of Forge" rankings |

### 🛡️ For Administrators
| Feature | Description |
|---|---|
| **Admin Dashboard** | Real-time platform metrics — users, exams, daily attempts, pass rates |
| **Exam Builder** | Create, edit, publish/unpublish exams with full metadata support |
| **Bulk Question Upload** | AI-powered parser that ingests `.js`, `.json`, and non-standard data files |
| **User Management** | View and manage all registered candidates |
| **Question Review** | Approve, reject, or edit AI-parsed questions before publishing |

### 🚀 Platform Capabilities
- 🔒 **24-Hour Persistent Sessions** — Stay logged in across browser restarts
- 🌗 **Dark Mode** — Full light/dark theme support across all pages
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- ⚡ **High Performance** — Database-level query optimization with Prisma ORM
- 🏆 **Live Leaderboard** — Real-time competitive rankings powered by session aggregation

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Nuxt 3](https://nuxt.com/) (Vue 3 + Nitro Server Engine) |
| **UI Library** | [Nuxt UI](https://ui.nuxt.com/) (Heroicons, TailwindCSS) |
| **Database** | PostgreSQL (via Prisma ORM) |
| **Authentication** | [@sidebase/nuxt-auth](https://sidebase.io/nuxt-auth/) (Local Provider) |
| **State Management** | [Pinia](https://pinia.vuejs.org/) |
| **Language** | TypeScript / Vue 3 Composition API |

---

## 📁 Project Structure

```
RhyseForge/
├── pages/                    # All application routes
│   ├── index.vue             # Landing page — exam catalog browser
│   ├── login.vue             # User authentication
│   ├── pricing.vue           # 3-tier pricing page
│   ├── leaderboard.vue       # Global competitive rankings
│   ├── profile.vue           # User identity & photo management
│   ├── dashboard/
│   │   └── index.vue         # Student performance dashboard
│   ├── exam/
│   │   └── [id].vue          # Exam lobby, session, and results engine
│   └── admin/
│       ├── dashboard.vue     # Admin metrics & quick actions
│       ├── upload.vue        # AI question parser interface
│       ├── users.vue         # User management table
│       └── exams/
│           ├── index.vue     # Exam catalog management
│           └── create.vue    # New exam builder
├── server/
│   └── api/
│       ├── auth/             # Login, logout, session endpoints
│       ├── exams/            # Exam CRUD + question retrieval
│       ├── sessions/         # Exam attempt tracking
│       ├── user/             # Profile read & update (PATCH)
│       ├── leaderboard.get.ts # Real-time ranking aggregation
│       └── admin/
│           ├── stats.get.ts  # Live platform metrics
│           ├── upload.post.ts # AI question ingestion engine
│           └── exams/        # Admin exam management
├── composables/
│   └── useExam.ts            # Exam state management composable
├── layouts/
│   └── default.vue           # Global navbar + footer (responsive)
├── prisma/
│   ├── schema.prisma         # Database schema (User, Exam, Question, Session)
│   └── seed.ts               # Initial exam data seeder
├── nuxt.config.ts            # Nuxt configuration & auth settings
└── package.json              # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/rhyseforge.git
cd rhyseforge

# 2. Install dependencies
npm install

# 3. Initialize the database
npx prisma db push

# 4. Seed the database with sample exams
npx prisma db seed

# 5. Start the development server
npm run dev
```

The platform will be available at **http://localhost:3000**

### Default Accounts

| Role | Email | Password |
|---|---|---|
| **Admin** | `admin@examforge.com` | `admin123` |
| **User** | `user@examforge.com` | `user123` |

---

## 🗄️ Database Schema

RhyseForge uses **PostgreSQL** with **Prisma ORM** for shared local + production data.

```
┌──────────┐     ┌──────────┐     ┌───────────┐
│   User   │────→│ Session  │←────│   Exam    │
│──────────│     │──────────│     │───────────│
│ id       │     │ id       │     │ id        │
│ email    │     │ userId   │     │ title     │
│ password │     │ examId   │     │ provider  │
│ name     │     │ score    │     │ timeLimit │
│ role     │     │ passed   │     │ status    │
└──────────┘     │ mode     │     └─────┬─────┘
                 └──────────┘           │
                                  ┌─────┴─────┐
                                  │ Question  │
                                  │───────────│
                                  │ question  │
                                  │ options   │
                                  │ answer    │
                                  │ topic     │
                                  └───────────┘
```

---

## 🛡️ Security & Anti-Sharing System

RhyseForge features a state-of-the-art **Device-Locked Subscription System** to prevent unauthorized credential sharing.

- 🔐 **Fingerprint Binding**: Your account is securely bound to your **User ID + Unique Device ID**.
- 🚫 **Anti-Sharing**: Even if someone gets your login credentials, they **cannot access your subscription from another device**.
- 🖥️ **Hardware Signals**: The system uses high-entropy signals (Canvas fingerprint, WebGL GPU renderer, CPU cores, screen resolution, etc.) to identify your machine.
- ⚙️ **Admin Reset**: If you upgrade your device, our admin team can securely reset your binding to allow a transfer.

---

## 💰 Pricing Plans (Indian Standard)

| Plan | Price | Details |
|---|---|---|
| **Beginning** | **₹200**/module | Access to 1 certification exam of your choice. Unlimited practice & mock exams. |
| **Advanced** ⭐ | **₹500**/lifetime | **All current & future modules.** Priority content access. Advanced analytics. |
| **Enterprise** | **₹5,000**/license | Full source code. White-label branding. Deploy on your infrastructure. |

---

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server (http://localhost:3000)
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run generate  # Generate static site

# Database
npx prisma db push    # Apply schema changes
npx prisma db seed    # Seed sample data
npx prisma studio     # Visual database browser (http://localhost:5555)
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# Authentication
NUXT_SECRET=your-secret-key-here

# Database (PostgreSQL)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DBNAME?sslmode=require"
```

---

## 📱 Responsive Design

RhyseForge is fully responsive across all device resolutions:

- **Desktop** (1280px+) — Full layout with side panels and podium leaderboard
- **Tablet** (768px - 1279px) — Adapted grids, collapsible sections
- **Mobile** (320px - 767px) — Hamburger navigation, stacked cards, touch-optimized buttons

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is proprietary software. See the [Pricing](#-pricing-plans) section for licensing options.

- **Beginning / Advanced** — Personal use license
- **Enterprise** — Commercial redistribution license

---

## 👤 Author

**RhyseForge Team** — Platform Architects & Engineers

---

<p align="center">
  <strong>⚡ RhyseForge</strong> — Knowledge is forged through testing.
</p>
