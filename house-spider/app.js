const Koa = require('koa');
const logger = require('koa-logger');
var Router = require('koa-router');
var houseService = require('./service/houseService');

const app = new Koa();

var router = new Router();

router.get('/hello', async (ctx, next) => {
    await houseService.gethouseInfo();
    ctx.body = 'we are at home!';
});


app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

app.listen(3000);

houseService.gethouseInfo();