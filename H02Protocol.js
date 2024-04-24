'use strict';

// *XX,YYYYYYYYYYYYYYY,V1,HHMMSS,S,latitude,D,
// longitude,G,speed,direction,DDMMYY,equ_status #
const STRUCTUREOFDEVICERESPONSE = {
    cmdHead: 0,       // 1
    vendor: (1, 3),     // 2
    imei: 15,
    cmdCode: 2,
    time: 6,
    dataValid: 1,     // A/V/B  
    latitude: ,
    latSimbol: ,
    longitude: ,
    lngSimbol: ,
    speed: ,
    azimuth: ,
    date: ,
    vehicleStatus: ,  // 4 bytes
    end: '#'
};


const echo = () => {};
