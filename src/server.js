// server
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageSuccess } = require('./pages')

// configure nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

server
// receber os dados req.body
.use(express.urlencoded({ extended: true }))
// configure static files (css, js, img's)
.use(express.static("public"))
// routes of the web-app
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

.listen(5000)