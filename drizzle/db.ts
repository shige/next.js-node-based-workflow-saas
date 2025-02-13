import "@/drizzle/envConfig";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });

export const getUsers = async () => {
	return db.query.usersTable.findMany();
};
