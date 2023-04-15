import express, { Application, Request, Response } from 'express';

const app : Application = express();
const port : number = 80;

const path = require('path');
app.use(express.static(path.join(__dirname, '../../frontend/build')));


app.listen(port, function () {
    console.log('listening on 80')
}); 

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../frontend/build/index.html'));
})