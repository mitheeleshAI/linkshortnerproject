---
description: Read this file to understand how to fetch data in the project.
---
# Data Fetching Instructions
This document provides guidance on how to fetch data in the next.js project, including best practices and recommended approaches. Adhering to these instructions will ensure consistency and maintainability across the codebase.
## 1. Use Server Components for Data Fetching
in NEXT.js 13 and above, ALWAYS use server components for data fetching. NEVER use client components for data fetching unless absolutely necessary. 
## 2. Data Fetching Methods
ALWAYS use the helper functions in the /data directory to fetch data. NEVER fetch data directly from the database or external APIs in your components. This ensures that all data fetching logic is centralized and reusable.
ALL helper functions in the /data directory should use drizzle ORM for database interactions. NEVER use raw SQL queries or other ORMs directly in your components.