module.exports = async (req, res, next) => {
    let startTime = Date.now();
    await next();
    let processTime = Date.now() - startTime;
    console.log(`${req.method.toUpperCase()} ${req.url} (Took ${processTime}ms)`);
}