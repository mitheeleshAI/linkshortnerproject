import { pgTable, integer, varchar, text, timestamp } from "drizzle-orm/pg-core";

// Links table: stores only required fields per project request.
// Timestamps are declared with Drizzle's `timestamp()` and a SQL migration
// (included below) uses `timestamptz` to ensure timezone data is stored.
export const links = pgTable("links", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    short_code: varchar("short_code", { length: 10 }).notNull().unique(),
    destination: text("destination").notNull(),
    clerk_user_id: varchar("clerk_user_id", { length: 255 }).notNull(),
    created_at: timestamp("created_at").notNull().defaultNow(),
    updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export type Link = typeof links;
