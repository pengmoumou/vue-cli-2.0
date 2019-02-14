const Koa = require('koa')
const app = new Koa()
// const views = require('koa-views')
const json = require('koa-json')//用来美观的输出JSON response
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')//用来解析body的中间件
const logger = require('koa-logger')//koa的日志模块

const index = require('./routes')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/../dist'))

// app.use(views(__dirname + '/views', {
//   extension: 'pug'
// }))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
