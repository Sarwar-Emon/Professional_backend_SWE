const isValid = (req, res, next) => {

    // Check token
    if (req.query.token === "123") {
        next();
    } else {
        return res.status(401).json({
            message: "Unauthorized: Invalid Token"
        });
    }
};


const checkUserAgent = (req, res, next) => {

    // Get User-Agent from request header
    const userAgent = req.headers['user-agent'];

    const blockedAgents = [
        /curl/i,
        /wget/i,
        /python-requests/i,
        /Go-http-client/i,
        /Java/i,
        /sqlmap/i,
        /nmap/i,
        /Nikto/i,
        /HeadlessChrome/i,
        /PhantomJS/i
    ];

    // First, if User-Agent is missing, reject
    if (!userAgent) {
        return res.status(403).json({
            message: "Forbidden: User-Agent is missing"
        });
    }

    // Check if User-Agent matches any blocked agent
    const isBlocked = blockedAgents.some(
        (pattern) => pattern.test(userAgent)
    );

    // If blocked, reject
    if (isBlocked) {
        return res.status(403).json({
            message: "Forbidden: Suspicious User-Agent"
        });
    }

    // Everything is okay
    next();
};


module.exports = {
    isValid,
    checkUserAgent
};