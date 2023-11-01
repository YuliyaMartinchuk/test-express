import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req:Request, res:Response) => {
    res.send('Hello,  this is test')
})

app.get('/about', (req, res) => {
    res.send('This is my about route..... ')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// Export the Express API
module.exports = app