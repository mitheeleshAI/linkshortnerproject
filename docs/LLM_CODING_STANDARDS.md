# Project Coding Standards for LLMs (Next.js)

This document outlines the mandatory coding standards, architectural patterns, and technical constraints that all generated code must adhere to when developing within this Next.js application. Adherence is non-negotiable, especially concerning authentication and routing.

## 1. Core Framework & Structure
*   **Framework:** The project uses **Next.js (App Router)**. All routes must be implemented using the App Router structure (`app/` directory).
*   **Language:** Primarily **TypeScript**. Type safety must be enforced everywhere possible.
*   **UI Components:** **CRITICAL: ALL UI elements MUST use components from shadcn/ui.** Do not create any custom React components; always leverage the shadcn/ui library primitives.
*   **Component Separation:** Use Atomic Design principles. Components must be modular and self-contained. Utility functions belong in `lib/`.

## 2. Authentication (STRICT CLERK USAGE)
**ALL authentication logic MUST, without exception, use Clerk.** No custom OAuth implementations or session management mechanisms are permitted outside of the direct Clerk SDK calls.

1.  **Protected Routes:** The `/dashboard` route is a **protected route**. Implement security guards using `middleware.ts` to check for active user sessions *before* rendering any component associated with this route segment.
2.  **Redirection Logic:** If a user attempts to access the root homepage (`/`) while already logged in, the client-side router must redirect them immediately and silently to `/dashboard`.
3.  **Sign In/Up Flow:** The sign-in and sign-up entry points **must always launch Clerk's UI via a modal component** (`<SignIn />` or `<SignUp />` wrapped appropriately), never navigating directly to the full-page flow unless absolutely necessary and explicitly documented.

## 3. Data Handling & API Interaction
*   **Server vs. Client:** Developers must strictly differentiate between Server Components (for server-side logic, database access) and Client Components (for interactivity). Do not perform side effects or sensitive operations in Client Components. Use `async` components where necessary.
*   **Database Access:** All interactions with the database (`db/`) must use the provided Drizzle ORM instance imported from `lib/`. Never instantiate database connections manually.

## 4. General Coding Practices
*   **Naming Conventions:**
    *   **Components/Pages:** PascalCase (e.g., `UserProfileCard`).
    *   **Hooks:** `use...` prefix, camelCase (e.g., `useAuthStatus`).
    *   **Utility Functions/Variables:** camelCase (e.g., `calculateTotalAmount`).
*   **Error Handling:** Use TypeScript union types for expected errors where possible. Global error boundaries should catch UI rendering failures gracefully.

---
END OF STANDARDS DOCUMENTATION
===============================