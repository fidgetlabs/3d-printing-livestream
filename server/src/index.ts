// server/index.ts
import NodeMediaServer from 'node-media-server';
import express from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(new URL(import.meta.url));
const __dirname = dirname(__filename);

// Set up node-media-server
var nms = new NodeMediaServer({
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        allow_origin: '*',
        mediaroot: './media'
    }
});
nms.run();

// Set up express to serve video files
const app = express();
app.use(express.static(path.join(__dirname, 'media')));
app.listen(8001, () => {
    console.log('HTTP Server is running on http://localhost:8001');
});