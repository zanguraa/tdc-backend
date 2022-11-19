import koa from 'koa';
const app = new koa();


app.use(async ctx => {
    ctx.body = 'Hello World';
  });

console.log("Hello world");

app.listen(3000);