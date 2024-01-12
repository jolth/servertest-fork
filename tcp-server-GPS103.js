/*
 * Copyright 2024 Jorge Toro Hoyos (jolthgs@gmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const net = require('node:net');

const HOSTNAME = '';
const PORT = 10101;

// Length of package for echo
const LENGTHFORECHO= 25;

const server = net.createServer(socket => {
    //socket.setEncoding('utf8');
    socket.setTimeout(240000); // 4 minutes of inactivity

    socket.remoteAddPort = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`Client connected ${socket.remoteAddPort}`);

    socket.on('data', (chunk) => {
        console.log(`${new Date()} [${chunk.length}] "${chunk.toString()}"`);

        // echo
        if (chunk.length === LENGTHFORECHO) {
            socket.pipe(socket);
            return;
        }

        // valid data

    });

    socket.on('end', () => {
        console.log("Closing connection with the client: ", socket.address());
    });

    socket.on('error', (err) => {
        console.error(`Socket Error: ${err}`);
        console.error(new Error().stack);
    });

    socket.on('timeout', () => {
        console.log('socket timeout');
        socket.end();
    })

});

server.listen({port: PORT, host: HOSTNAME}, () => {
    console.log("%j :: server ready and listening on port %j\n",
        new Date(), server.address());
});
