// ----------------------------------------------------------
// IMPORT LIRARY
// ----------------------------------------------------------
import express from 'express';
import cors from 'cors';
import logger from './utils/logger.js'
import routes from './routes.js'


// ----------------------------------------------------------
// INITIALIZE EXPRESS
// ----------------------------------------------------------
const app = express();


// ----------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);


// ----------------------------------------------------------
// ERROR HANDLER
// ----------------------------------------------------------
app.use((err, req, res, next) => {
    const { issues, message, status = 500 } = err;

    const formattedError = issues
        ? issues.map(({ code, path, message }) => ({ code, path, message }))
        : { message };

    return res.status(status).json(formattedError);
});


// ----------------------------------------------------------
// IF ROUTE NOT FOUND
// ----------------------------------------------------------
app.use((req, res) => {
    res.status(404).json({
        message: `Route [${req.method}]-[${req.path}] not found`
    });
});


// ----------------------------------------------------------
// SERVER LISTENING
// ----------------------------------------------------------
app.listen(process.env.APP_PORT || 3000, () => {
    logger.info(`SERVER RUNNING ON ${process.env.APP_HOST || 'localhost'}:${process.env.APP_PORT || 3000}`);  
})
