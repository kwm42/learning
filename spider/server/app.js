const Koa = require('koa');
const logger = require('koa-logger');
const cors = require('koa2-cors');
var Router = require('koa-router');
var houseService = require('./service/houseService');

const app = new Koa();
app.use(cors());
app.context.rest = (data) => {
    
}

var router = new Router();

router.get('/hello', async (ctx, next) => {
    var data = await houseService.gethouseInfo();
    console.log(data)
    ctx.response.type = 'application/json';
    ctx.response.body = {
        content: 'a'
    }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(logger());

app.listen(3001);

houseService.gethouseInfo();