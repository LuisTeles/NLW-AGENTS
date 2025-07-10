# nlw-agents

nlw-agents is a full-stack project developed during Rocketseat's Next Level Week (NLW) event. It enables users to create rooms, record audio, transcribe speech, and ask questions powered by AI, using a modern web interface and a robust backend.

## Project Structure

- **server/**: Fastify-based Node.js backend with PostgreSQL and AI integration
- **web/**: React + Vite frontend with Tailwind CSS

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (for local PostgreSQL)

---

### Backend Setup (server)

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/nlw-agents.git
   cd nlw-agents/server
   ```
2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and update values as needed.
4. **Start PostgreSQL with Docker:**
   ```sh
   docker compose up -d
   ```
5. **Run database migrations and seed:**
   ```sh
   pnpm db:migrate && pnpm db:seed
   # or
   npm run db:migrate && npm run db:seed
   ```
6. **Start the backend server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```

---

### Frontend Setup (web)

1. **Install dependencies:**
   ```sh
   cd ../web
   pnpm install
   # or
   npm install
   ```
2. **Start the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   ```
3. **Access the app:**
   - Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Production

1. **Build frontend:**
   ```sh
   pnpm build
   # or
   npm run build
   ```
2. **Start backend in production mode:**
   ```sh
   pnpm start
   # or
   npm start
   ```

---

## Main Libraries, Frameworks & Tools

### Backend
- **Fastify**: Web server framework for Node.js
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **drizzle-kit**: Migration and schema tool for Drizzle ORM
- **@google/genai**: Google Gemini AI API integration
- **Zod**: TypeScript-first schema validation
- **Docker**: Containerized PostgreSQL with pgvector
- **TypeScript**: Type safety for Node.js
- **Biome**: Code formatting and linting

### Frontend
- **React**: UI library
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form state management
- **@tanstack/react-query**: Data fetching and caching
- **Zod**: Schema validation
- **Radix UI**: Accessible UI primitives
- **Lucide**: Icon library
- **Day.js**: Date handling

---

## Usage

- **Create a room**: Fill the form on the homepage
- **Record audio**: Enter a room and use the "Gravar Áudio" button
- **Ask questions**: Submit questions in a room to get AI-powered answers

---

## Scripts & Commands

### Backend
- `pnpm dev` / `npm run dev` — Start backend in development mode
- `pnpm start` / `npm start` — Start backend in production mode
- `pnpm db:migrate` / `npm run db:migrate` — Run database migrations
- `pnpm db:seed` / `npm run db:seed` — Seed the database

### Frontend
- `pnpm dev` / `npm run dev` — Start frontend in development mode
- `pnpm build` / `npm run build` — Build frontend for production

---

## License

This project is for educational purposes, developed during Rocketseat NLW.
