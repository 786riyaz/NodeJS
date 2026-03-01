# Prisma Seeding – Complete Guide

---

## 1️⃣ Configure Seed Command in `package.json`

Add the `prisma.seed` configuration inside your `package.json`.

---

### ✅ If Using JavaScript

```json
{
  "prisma": {
    "seed": "node prisma/seed.js"
  }
}
```

---

### ✅ If Using TypeScript (Recommended in Next.js)

```json
{
  "prisma": {
    "seed": "ts-node prisma/seed.ts"
  }
}
```

---

### ✅ If Using ES Modules

```json
{
  "prisma": {
    "seed": "node --loader ts-node/esm prisma/seed.ts"
  }
}
```

---

## 2️⃣ Create Seed File

Create the following file:

```
prisma/seed.ts
```

### 📄 `prisma/seed.ts`

```ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: "Riyaz",
        email: "riyaz@example.com",
      },
      {
        name: "Admin",
        email: "admin@example.com",
      }
    ]
  })

  console.log("Seeding completed.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
```

---

## 3️⃣ Run Database Migration

```bash
npx prisma migrate dev
```

---

## 4️⃣ Run Seed Command

```bash
npx prisma db seed
```

---

## 5️⃣ Reset + Seed (Very Common in Development)

This command:

* Drops the database
* Recreates it
* Applies migrations
* Runs the seed file automatically

```bash
npx prisma migrate reset
```

---

## 6️⃣ Production Seeding

To manually run seed in production:

```bash
npx prisma db seed
```

---

# ✅ Summary Workflow (Development)

```bash
npx prisma migrate dev
npx prisma db seed
```

OR simply:

```bash
npx prisma migrate reset
```

---