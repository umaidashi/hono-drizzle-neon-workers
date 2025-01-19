import type { InferModel } from "drizzle-orm";
import {
	index,
	pgTable,
	timestamp,
	uniqueIndex,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export type User = InferModel<typeof users, "select">;

export const users = pgTable(
	"users",
	{
		id: uuid("id").defaultRandom().primaryKey().notNull(),
		fullName: varchar("full_name").notNull(),
		email: varchar("email").notNull(),
		password: varchar("password").notNull(),
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at").defaultNow().notNull(),
	},
	(table) => ({
		fullNameIdx: index("users_full_name_idx").on(table.fullName),
		emailIdx: uniqueIndex("users_email_idx").on(table.email),
	}),
);
