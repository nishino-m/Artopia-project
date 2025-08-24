# Artopia-prpject

## 必要環境

- Bun(推奨) or Node.js
- Docker & Docker Compose
- Git

## ⚙️ セットアップ手順

### 1. リポジトリ取得

```bash
git clone
cd artopia-project
```

### 2. 環境変数設定

```bash
cd frontend
cp .env.local.example .env.local
```

### 3. MySQL操作

```bash
#起動
docker compose up -d
#停止
docker compose down
#確認
docker logs -f artopia-mysql
```

### 4.パッケージインストール

```bash
cd frontend
bun install
#or
npm install
```

### 5. Prisma セットアップ

```bash
#bunx or npx
bunx prisma migrate dev --name init
bunx prisma generate
```
#### Tech Stack
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?logo=bun&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=github-actions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white)
