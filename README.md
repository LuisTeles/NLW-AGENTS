# nlw-agents

**nlw-agents** is a full-stack project developed during Rocketseat's NLW (Next Level Week) event. It demonstrates modern web development practices using TypeScript, React, Fastify, PostgreSQL, and a robust toolchain for building scalable applications. The project allows users to create and view rooms, serving as a foundation for real-time or collaborative features.

---

## 🚀 Project Purpose

The goal of **nlw-agents** is to provide a practical example of a modern web application, showcasing best practices in backend and frontend development, database integration, and developer experience. It is ideal for learning, experimentation, and as a starting point for more complex projects.

---

## 🛠️ Tech Stack & Tools

### Backend (`/server`)

- **TypeScript**: Strongly typed JavaScript for safer, scalable code.
- **Fastify**: High-performance Node.js web framework for building APIs.
- **Zod**: Type-safe schema validation for environment variables and API payloads.
- **Drizzle ORM**: Type-safe ORM for PostgreSQL, handling schema and migrations.
- **PostgreSQL**: Relational database for persistent data storage.
- **drizzle-seed**: Tool for seeding the database with sample data.
- **Docker**: Containerization for easy database setup and consistent environments.
- **@fastify/cors**: Middleware for enabling CORS in Fastify APIs.
- **biome**: Code formatting and linting.

### Frontend (`/web`)

- **React**: UI library for building interactive user interfaces.
- **React Router DOM**: Declarative routing for React applications.
- **@tanstack/react-query**: Data fetching and caching for React.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **shadcn/ui**: Prebuilt, accessible UI components.
- **Vite**: Fast build tool and development server.
- **clsx, tailwind-merge, class-variance-authority**: Utilities for managing CSS class names.
- **Lucide**: Icon library for modern SVG icons.
- **biome**: Code formatting and linting.

---

## ⚙️ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) (for database)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

### 1. Clone the Repository

```sh
git clone https://github.com/your-username/nlw-agents.git
cd nlw-agents
```

---

### 2. Backend Setup (`/server`)

1. **Install dependencies:**

    ```sh
    cd server
    npm install
    ```

2. **Start PostgreSQL with Docker:**

    ```sh
    docker compose up -d
    ```

3. **Configure environment variables:**

    ```sh
    cp .env.example .env
    # Edit .env as needed
    ```

4. **Run database migrations & (optionally) seed:**

    ```sh
    npm run db:migrate
    npm run db:seed # optional
    ```

5. **Start the development server:**

    ```sh
    npm run dev
    ```

    The backend will be available at [http://localhost:3333](http://localhost:3333).

---

### 3. Frontend Setup (`/web`)

1. **Install dependencies:**

    ```sh
    cd ../web
    npm install
    ```

2. **Start the development server:**

    ```sh
    npm run dev
    ```

    The frontend will be available at [http://localhost:5173](http://localhost:5173).

---

## 🏗️ Production Build

### Backend

```sh
cd server
npm run build
npm start
```

### Frontend

```sh
cd web
npm run build
npm run preview
```

---

## 💻 Usage

- Access [http://localhost:5173](http://localhost:5173) in your browser.
- The homepage lists available rooms (fetched from the backend).
- Click a room to view its details.

---

## 📜 Useful Scripts

### Backend (`/server`)

- `npm run dev` — Start Fastify server in development mode
- `npm run db:seed` — Seed the database with sample data

### Frontend (`/web`)

- `npm run dev` — Start Vite development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build

---

## 🤝 Contributing

Feel free to fork this repository and use it as a starting point for your own projects!

---

## 📄 License

This project is licensed under the MIT License.