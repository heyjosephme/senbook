# SenBook

Bookkeeping system built by a foreign IT freelancer (個人事業主), for foreign IT freelancers in Japan.

## Why This Exists

As foreign IT freelancers in Japan, we face unique challenges:

- Complex Japanese tax requirements but language barriers with existing solutions
- Need to track both domestic and international income
- Managing expenses in multiple currencies
- Generating proper invoices that comply with Japanese regulations (インボイス制度)
- Preparing documents for tax filing (確定申告)

## Features

- 📋 Generate compliant invoices for Japanese clients (with 登録番号)
- 🧾 Track expenses and categorize them according to Japanese tax rules
- 💹 Handle multi-currency transactions with automatic conversion
- 📊 Generate reports needed for 確定申告
- 🔍 Track expense categories specific to IT freelancers (開発機材, サーバー費用, etc)
- 📱 Quick receipt capture and categorization

## Tech Stack

- Next.js (App Router + Server Actions)
- Supabase (Auth, DB, Storage)
- Deployed on Vercel

## Development

Currently in early development. If you're also a foreign IT freelancer in Japan and interested in contributing or testing, reach out!

## Setup

1. Clone and install

```bash
git clone https://github.com/heyjosephme/senbook.git
cd senbook
npm install
```

````

2. Set up Supabase and environment variables

```bash
cp .env.example .env.local
# Add your Supabase details
```

3. Run locally

```bash
npm run dev
```

## Roadmap

- [ ] Basic invoice generation
- [ ] Receipt management
- [ ] Expense categorization based on 確定申告 requirements
- [ ] Multi-currency support
- [ ] Basic reporting for tax filing
- [ ] インボイス制度 compliance

```

Would you like me to add:
1. More specific details about Japanese tax requirements?
2. Common expense categories for IT freelancers?
3. Or elaborate on any other section?
```
````
