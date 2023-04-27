const verifyLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Faltan datos" });
  } else {
    next();
  }
};

module.exports = { verifyLogin };
