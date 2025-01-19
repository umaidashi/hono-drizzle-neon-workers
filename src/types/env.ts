import type { NeonDatabase } from "drizzle-orm/neon-serverless";
// import type { User } from "../db/schema";

type Bindings = {
	AUTH_DRIZZLE_URL: string;
	// JWT_SECRET_KET: string;
};

type Variables = {
	db: NeonDatabase<Record<string, never>>;
	// user: User;
};

export type Env = { Bindings: Bindings; Variables: Variables };
