import express from 'express';
import setUpRouter from './route';
import 'dotenv/config';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();

const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: ['http://localhost:4000', 'https://apartment-rent.vercel.app'], 
    methods: [ 'GET', 'POST', 'PUT', 'DELETE' ],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true 
};

app.use(cors(corsOptions));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

setUpRouter(app);

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

export default app;