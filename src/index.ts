import { Hono } from "hono";
import { usersTable } from "./db/schema";
import { dbMiddleware } from "./middleware/db.middleware";
import type { Env } from "./types";
const app = new Hono<Env>();

app.use("*", dbMiddleware);

app.get("/", async (c) => {
	const db = c.get("db");
	const users = await db.select().from(usersTable);

	return c.json(users);
});

export default app;
