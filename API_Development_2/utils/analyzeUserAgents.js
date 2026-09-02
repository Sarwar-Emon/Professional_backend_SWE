const fs = require('fs');
const path = require('path');
const UAParser = require('ua-parser-js');

const userAgenConnect = path.join(__dirname, '../userAgent.json');

const analyzeUserAgents = () => {
    const raw = fs.readFileSync(userAgenConnect, 'utf-8');
    const list = JSON.parse(raw);

    const counts = {
        "Postman": 0,
        "Thunder Client": 0,
        "Chrome Browser": 0,
        "Edge Browser": 0,
        "curl": 0,
        "Other": 0
    };

    for (const agent of list) {
        const parser = new UAParser(agent);
        const result = parser.getResult();

        let type;
        if (result.browser.name) {
            type = result.browser.name + " Browser";
        }
        else if (agent.includes("Thunder Client")) {
            type = "Thunder Client";
        }
        else if (agent.includes("PostmanRuntime")) {
            type = "Postman";
        }
        else if (agent.includes("curl")) {
            type = "curl";
        }
        else {
            type = "Other";
        }

        counts[type] = (counts[type] || 0) + 1;
    }

    return counts;
};

module.exports = analyzeUserAgents;