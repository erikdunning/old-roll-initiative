const bunyan = require('bunyan')
const path = require('path')

const logger = bunyan.createLogger({
    name: 'foo',
    streams: [{
        type: 'rotating-file',
        path: path.resolve(__dirname,'..','application.log'),
        period: '1d',   // daily rotation
        count: 3        // keep 3 back copies
    }]
});

module.exports = logger