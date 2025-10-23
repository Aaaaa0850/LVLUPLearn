import { Hono } from 'hono';
import { z } from 'zod';

const app = new Hono();

const idSchema = z.string().uuid();
/*const schema = z.object({
		id: z.string().uuid(),
		title: z.string().min(1).max(30),
		duration: z.number().min(1).max(1440),
});*/

app.get('/schedule/:id', async (c) => {
	const reqId = c.req.param('id');
	return c.json({ message: 'GET schedule' });
})

app.post('/schedule/:id', async (c) => {
	const reqId = c.req.param('id')

	// --- JSON安全取得 ---
	let body: { userId?: string, title?: string, duration?: number, date?: Date } = {}
	try {
		body = await c.req.json()
	} catch {
		return c.json({ error: 'Invalid JSON' }, 400)
	}

	const userId = body.userId
	if (!userId) {
		return c.json({ error: 'Missing userId' }, 400)
	}

	// --- ID形式チェック ---
	const reqIdResult = idSchema.safeParse(reqId)
	const bodyIdResult = idSchema.safeParse(userId)

	if (!reqIdResult.success || !bodyIdResult.success) {
		return c.json({ error: 'Invalid ID format' }, 400)
	}

	// --- ID不一致チェック ---
	if (userId !== reqId) {
		return c.json({ error: 'Forbidden: ID mismatch' }, 403)
	}
	const title = body.title || 'Default Title';
	const duration = body.duration || 0;
	const date = body.date ? new Date(body.date) : new Date();
	// --- 正常処理 ---
	return c.json({ message: 'POST schedule success', id: userId })
});

app.patch('/schedule', (c) => {
	return c.json({ message: 'PATCH schedule' });
});

app.delete('/schedule', (c) => {
	return c.json({ message: 'DELETE schedule' });
});

export default app;