require(`dotenv`).config()
const express = require(`express`)
const cors = require(`cors`)

const userRouter = require(`./routes/userRoute`)
const imageRouter = require(`./routes/imageRoute`)
const authRouter = require(`./routes/auth`)

const errorHandler = require(`./middleware/errorHandler`)

const app = express()
const port = process.env.PORT || 6050

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(`/api/images`, imageRouter)
app.use(`/api/users`, userRouter)
app.use(`/api/auth`, authRouter)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})