import 'dotenv/config'
import {MongoClient} from 'mongodb'
import {app} from './init-app';
import {settings} from './settings';

const mongoUri = settings.MONGO_URI
export const client = new MongoClient(mongoUri)

export async function startApp() {
    await client.connect()
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port: ${process.env.PORT}`)
    })
}

startApp()
