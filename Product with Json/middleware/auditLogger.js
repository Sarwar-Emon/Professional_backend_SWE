const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/request.json');

const auditLogger = (req, res, next) => {

    const log = {
        method: req.method,
        url: req.originalUrl,
        time: new Date().toISOString(),
        agent: req.headers['user-agent']
    };

    let logs=[];
    if(fs.existsSync(logFilePath)) {
    
    const data= fs.readFileSync(logFilePath,'utf8');
    
    if (data) {
        // JSON string → JavaScript array
        logs = JSON.parse(data);
    }
}
    logs.push(log);

    fs.writeFileSync(
        logFilePath,
        JSON.stringify(logs, null, 2)
    );
    
    next();
};

module.exports = auditLogger;