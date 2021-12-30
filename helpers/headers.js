global.app.use(function (req, res, next) {
  req.headers.origin = req.headers.origin || req.headers.host;
  next();
});
