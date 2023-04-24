async function checkApiKey(req, res, next) {
  try {
    const apiKey = await req.headers["api"];
    if (apiKey === "123") {
      next();
    } else throw new Error("Clave API invalida");
  } catch (err) {
    console.log(err);
    next(err);
  }
}

module.exports = { checkApiKey };
