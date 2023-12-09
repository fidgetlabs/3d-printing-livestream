# Info

A quick Attempt at a livestream video server and simple UI which I can send videos from OBS on my mac too. 

## Why?

Specifically to view my 3d printer's camera feeds and allow others to as well.

## How

Its a react frontend (barely) streaming from a node backend with express and node-media-server (nms).
- nms is the rtmp target which I send video to from my 3d printers (well, from the printer, to OBS, to the rtmp server provide by nms).
- nms then makes this input stream available at a configured url as a .flv file to stream for client's with access to the url.
