import { pgTable, unique, integer, varchar, text, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const links = pgTable("links", {
	id: integer().primaryKey().generatedAlwaysAsIdentity({ name: "links_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 2147483647, cache: 1 }),
	shortCode: varchar("short_code", { length: 10 }).notNull(),
	destination: text().notNull(),
	clerkUserId: varchar("clerk_user_id", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	unique("links_short_code_unique").on(table.shortCode),
]);
