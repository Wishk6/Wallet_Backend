import { app } from './app.js';
import * as bodyParser from "express";
import GetEndpoints from 'express-list-endpoints';
const port = 3000;

app.listen(

    port, function() {
        app.use(bodyParser.urlencoded({ extended: false }));
        console.log(`App listening at http://localhost:${port}`)
        console.log(GetEndpoints(app));
    }
);
