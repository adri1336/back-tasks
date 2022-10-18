function setDefaultHeaders(res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
}

const middleware = (req, res, next) => {
    setDefaultHeaders(res);
    if(req.method === "OPTIONS") {
        res.sendStatus(200);
        return;
    }
    next();
};

module.exports = {
    middleware
};