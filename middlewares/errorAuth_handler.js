function errorAuthHandler(err, req, res, next) {
  if (err) {
    console.log(err);
    res.status(401).json({ error: "Error de autenticacion" });
  } else next();
}

module.exports = { errorAuthHandler };
