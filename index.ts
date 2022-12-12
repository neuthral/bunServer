// index.ts
import Bao from "baojs";
import serveStatic from "serve-static-bun";

const app = new Bao();

app.get("/", (ctx) => {
  return ctx.sendText("Hello World!");
});

app.post("/pretty", async (ctx) => {
  const json = await ctx.req.json();
  return ctx.sendPrettyJson(json);
});

app.get("/user/:user", (ctx) => {
  const user = await getUser(ctx.params.user);
  return ctx.sendJson(user);
});

app.get("/user/:user/:post/data", (ctx) => {
  const post = await getPost(ctx.params.post);
  return ctx.sendJson({ post: post, byUser: user });
});

const server = app.listen();

console.log(`Listening on ${server.hostname}:${server.port}`);
