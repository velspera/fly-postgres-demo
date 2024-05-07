import { json } from "@remix-run/node";
import { db } from "../utils/db.server";

export async function getVisitors() {
    const visitors = json({
        visitors: await db.visitors.findMany(),
    });
    return visitors;
}

