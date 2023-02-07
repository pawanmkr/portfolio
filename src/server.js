import http from 'http';
import app from './app.js'

const server = http.createServer(app);
const PORT  = process.env.PORT || 7090;

server.listen(PORT, () => {
    console.log(`server runnning on http://localhost:${PORT}/`);
});