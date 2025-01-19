import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import type { Context, Next } from "hono";
import type { Env } from "../types";

export const dbMiddleware = async (
	c: Context<Env, never, Record<string, unknown>>,
	next: Next,
) => {
	let connectionString = c.env.AUTH_DRIZZLE_URL;

	if (c.env.ENVIRONMENT === "LOCAL") {
		connectionString = "postgres://postgres:postgres@db.localtest.me:5432/main";
		neonConfig.fetchEndpoint = "http://db.localtest.me:4444/sql";
		neonConfig.useSecureWebSocket = false;
	}

	const sql = neon(connectionString);
	const db = drizzle(sql);

	c.set("db", db);

	await next();
};
