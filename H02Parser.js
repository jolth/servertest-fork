'use strict';

// Length of package
const LENGTHOFPACKAGE = 25;

/*
 * Echo only for package requerited
 */
const echo = (socket, length) => {
    if (length === LENGTHOFPACKAGE) socket.pipe(socket);
}




const filter = () => {
}

module.exports = {
    echo,
}

