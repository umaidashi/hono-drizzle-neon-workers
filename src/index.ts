import { Hono } from "hono";
import type { Env } from "./types/env";

const app = new Hono<Env>();

app.get("/", (c) => {
	return c.text("Hello Hono!");
});

export default app;
