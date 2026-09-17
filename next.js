// 1. App Router

// Definition:
// App Router is the modern routing system in Next.js. It uses the app folder to create routes.

// Example:

// app/
// ├── page.tsx
// ├── about/
// │   └── page.tsx
// └── contact/
//     └── page.tsx
// // app/about/page.tsx
// export default function About() {
//   return <h1>About Page</h1>;
// }

// /about → About Page

// Interview: App Router is Next.js's modern file-based routing system using the app directory.

// 2. Pages & Layouts

// Definition:
// A Page displays the UI for a route, while a Layout provides shared UI such as Navbar and Footer.

// Example:

// // app/layout.tsx
// export default function Layout({ children }) {
//   return (
//     <>
//       <nav>My Website</nav>
//       {children}
//       <footer>Footer</footer>
//     </>
//   );
// }
// // app/page.tsx
// export default function Home() {
//   return <h1>Home Page</h1>;
// }

// Interview: Page defines route content, while Layout provides common UI around pages.

// 3. Server Components

// Definition:
// Server Components run on the server and are useful for fetching data and reducing JavaScript sent to the browser.

// Example:

// export default async function Products() {
//   const res = await fetch("https://example.com/api/products");
//   const products = await res.json();

//   return <h1>{products.length} Products</h1>;
// }

// Interview: Server Components execute on the server and are the default in the Next.js App Router.

// 4. Client Components

// Definition:
// Client Components are used when a component needs browser-side interaction such as useState, useEffect, or event handlers.

// Example:

// "use client";

// import { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       {count}
//     </button>
//   );
// }

// Interview: Client Components are used for interactive UI and browser-side React features.

// 5. Dynamic Routes

// Definition:
// Dynamic Routes allow part of the URL to change dynamically, such as a user ID or product ID.

// Example:

// app/users/[id]/page.tsx
// export default async function User({ params }) {
//   const { id } = await params;

//   return <h1>User ID: {id}</h1>;
// }
// /users/101 → User ID: 101
// /users/202 → User ID: 202

// Interview: Dynamic Routes use segments like [id] to create dynamic URLs.

// 6. API Routes

// Definition:
// In the App Router, Route Handlers are used to create backend API endpoints.

// Example:

// app/api/users/route.ts
// export async function GET() {
//   return Response.json({
//     name: "Milin",
//     role: "Developer"
//   });
// }

// Request:

// GET /api/users

// Interview: Route Handlers allow us to create server-side API endpoints in Next.js.

// 7. Authentication

// Definition:
// Authentication verifies the identity of a user, usually through login, sessions, or tokens.

// Example:

// if (!user) {
//   return <p>Please login first.</p>;
// }

// return <p>Welcome {user.name}</p>;

// Authentication: Who are you?
// Authorization: What are you allowed to access?

// Interview: Authentication verifies the user's identity before allowing access to an application.

// 8. SEO

// Definition:
// SEO (Search Engine Optimization) helps search engines understand and index your website.

// Example:

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "My Portfolio",
//   description: "My developer portfolio",
// };

// This information can be used for the page's title and description.

// Interview: SEO improves how a website is understood and discovered by search engines.

// 9. Deployment

// Definition:
// Deployment means publishing a Next.js application so users can access it online.

// Build the application:

// npm run build

// Run the production application:

// npm start

// Development:

// npm run dev