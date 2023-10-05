import express, {Request, Response} from 'express';

export const app = express()

app.use(express.json())

app.get('/hello',
    async (req: Request, res: Response) => {
        res.send({value: 'OK, db is connected'})
    })

app.get('/api/users',
    async (req: Request, res: Response) => {
        res.send('OK')
    })

app.post('/api/users',
    async (req: Request, res: Response) => {
        res.sendStatus(201)
    })

app.put('/api/users/:id',
    async (req: Request, res: Response) => {
        res.send(req.body).status(200)
    })