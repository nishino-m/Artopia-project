# Artopia-prpject

##必要環境

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
