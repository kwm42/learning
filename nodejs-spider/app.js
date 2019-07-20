const Koa = require('koa');
const App = new Koa();
const Logger = require('koa-logger');
const Router = require('koa-router');

const testService = require('./service/testService');

let router = Router();

router.get('/', (ctx, next) => {
  ctx.body = 'hello world'
});

router.get('/test', (ctx, next) => {
  ctx.body = 'test';
  testService.testRequest();
})
 
App
  .use(router.routes())
  .use(router.allowedMethods());

App.listen(3000);