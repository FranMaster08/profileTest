const fs = require('fs');
const v8 = require('v8');
const {response} = require('express')
const navigationController ={
    getHome : (req, res = response , next) => {
        const snapshotStream = v8.getHeapSnapshot();
        // It's important that the filename end with `.heapsnapshot`,
        // otherwise Chrome DevTools won't open it.
        const fileName = `${Date.now()}.heapsnapshot`;
        res.header('Content-Type', 'text/plain');
        res.attachment(fileName);
        snapshotStream.pipe(res);
    }
}

module.exports =navigationController