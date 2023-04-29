const verifySignUp = (req, res, next) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password || !role) {
    return res.status(400).json({ msg: "Por favor ingrese todos los campos" });
  }
  next();
};

module.exports = { verifySignUp };
