import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import schadule from './schadule';

const app = new Hono();

app.route('/schedule', schadule);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);