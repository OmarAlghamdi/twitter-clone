import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: './config/dev.env' })

const app = express()

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on http://localhost:${process.env.PORT || 3000}`)
})
