module.exports = (req, res, next) => {
    res.header('access-control-allow-origins', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
};
