import {
	index,
	pgTable,
	timestamp,
	uniqueIndex,
	uuid,
	varchar,
} from "drizzle-orm/pg-core";

export type User = typeof usersTable.$inferSelect;

export const usersTable = pgTable(
	"users",
	{
		id: uuid("id").defaultRandom().primaryKey(),
		fullName: varchar("full_name", { length: 255 }).notNull(),
		email: varchar("email", { length: 255 }).notNull(),
		password: varchar("password", { length: 255 }).notNull(),
		createdAt: timestamp("created_at").defaultNow().notNull(),
		updatedAt: timestamp("updated_at").defaultNow().notNull(),
	},
	(table) => ({
		fullNameIdx: index("users_full_name_idx").on(table.fullName),
		emailIdx: uniqueIndex("users_email_idx").on(table.email),
	}),
);
