import 'dotenv/config'
import express, {Request, Response} from 'express'
import {MongoClient} from 'mongodb'

const mongoUri = process.env.mongoURI || 'mongodb://0.0.0.0:27017'
export const client = new MongoClient(mongoUri)

const app = express()

app.use(express.json())

app.get('/hello',
    async (req: Request, res: Response) => {
        res.send({value: 'OK, db is connected'})
    })

export async function startApp() {
    await client.connect()
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port: ${process.env.PORT}`)
    })
}

startApp()
