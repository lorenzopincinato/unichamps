import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('success'); 
})

app.listen(3000, () => {
    console.log(`App started on port: ${port}`)
})