import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";
import pino from "pino";

const app = new Hono();
const logger = pino();

// Middleware
app.use("*", secureHeaders());
app.use("*", cors());

// Logging Middleware
app.use("*", async (c, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  logger.info({
    method: c.req.method,
    url: c.req.url,
    status: c.res.status,
    elapsed: ms,
  }, "request completed");
});

app.post("/echo", async (c) => {
  const body = await c.req.json(); // Hono parses JSON automatically if body exists
  logger.info("Handling echo request");
  return c.json(body);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
