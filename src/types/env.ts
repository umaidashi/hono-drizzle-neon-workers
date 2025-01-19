import type { NeonHttpDatabase } from "drizzle-orm/neon-http";
// import type { User } from "../db/schema";

type Bindings = {
	AUTH_DRIZZLE_URL: string;
	ENVIRONMENT: string;
	// JWT_SECRET_KET: string;
};

type Variables = {
	db: NeonHttpDatabase<Record<string, never>>;
	// user: User;
};

export type Env = { Bindings: Bindings; Variables: Variables };
