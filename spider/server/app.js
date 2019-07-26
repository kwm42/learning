const Koa = require('koa'),
    logger = require('koa-logger'),
    cors = require('koa2-cors');

var Router = require('koa-router');
var houseService = require('./service/houseService');

const app = new Koa();
require('koa-qs')(app);
app.use(cors());

var router = new Router();

router.get('/getHouseInfo', async (ctx, next) => {
    var data = await houseService.gethouseInfo();
    ctx.response.type = 'application/json';
    ctx.response.body = {
        content: data
    }
});

router.get('/findAll', async (ctx, next) => {
    var data = await houseService.findAll();
    ctx.response.type = 'application/json';
    ctx.response.body = {
        content: data
    }
});

router.get('/find', async (ctx, next) => {
    let url = ctx.url
    // 从上下文的request对象中获取
    let request = ctx.request
    let req_query = request.query
    let req_querystring = request.querystring

    // 从上下文中直接获取
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
})

app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

app.listen(3001);