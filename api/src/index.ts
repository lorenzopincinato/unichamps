import express, { json } from 'express';
import routes from './routes';

const app = express();
const port = 4000;

app.use(json())
app.use(routes);

app.listen(port, () => {
    console.log(`App started on port: ${port}`)
})