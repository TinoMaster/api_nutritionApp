const verifySignUp = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Por favor ingrese todos los campos" });
  }
  next();
};

module.exports = { verifySignUp };
