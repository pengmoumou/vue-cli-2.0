const router = require('koa-router')()//对路由进行处理控制的中间件

router.get('/', async (ctx, next) => {
  // await ctx.render('index', {
  //   title: 'Hello Koa 2!'
  // })
})

router.get('/demo/demo0', async (ctx, next) => {
  ctx.body = 'koa2 get'
})

router.post('/demo/demo1', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 post'
  }
})

router.put('/demo/demo2', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 put'
  }
})

router.delete('/demo/demo3',async (ctx, next) => {
  ctx.body = 'koa2 delete'
})

module.exports = router
