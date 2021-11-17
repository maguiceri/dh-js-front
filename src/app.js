const express = require('express')
const app = express()
const PORT = 5000
const mainRouter = require('./routes/mainRoutes')
const path = require('path')

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')
app.use(express.static(path.resolve(__dirname, '../public')))

app.use('/', mainRouter)

app.listen(PORT, () =>
  console.log(
    `
------------------
server escuchando muy atentamente en el puerto ${PORT}
------------------
`
  )
)
