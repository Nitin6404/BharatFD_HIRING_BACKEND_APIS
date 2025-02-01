import http from 'http';
import * as process from 'process';
import serverConfig from './config/expressConfig';
import { mongooseConnect } from './config/mongooseConfig';

require('dotenv').config();

const port = process.env.PORT || 3000;
(async () => {
    const app = await serverConfig();

    // start if mongoose dialect check
    if (process.env.DB_DIALECT === 'mongodb') {
        try {
            await mongooseConnect();
        } catch (err) {
            console.error('Unable to connect to the database:', err);
            throw err;
        }
    }
    // end if mongoose dialect check
    // Create an HTTP server instance
    const httpServer = http.createServer(app);

    // Start listening for HTTP requests
    httpServer.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})();
