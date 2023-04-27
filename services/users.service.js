const UserService = () => {};
const UserModel = require("../models/users.model");

/* Middlewares */
const { hashPassword } = require("../utils/password.hash");
const { verifyPassword } = require("../utils/password.verify");

UserService.getAll = (req, res) => {};
UserService.getById = (req, res) => {};
UserService.save = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newPass = await hashPassword(password);
    const user = new UserModel({
      name,
      email,
      password: newPass,
    });
    user
      .save()
      .then((user) => {
        console.log(user);
        res.status(201).json({ message: "Usuario creado con exito" });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          message:
            err.code === 11000
              ? "Este correo ya existe"
              : "Error al crear el usuario",
        });
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};
UserService.update = (req, res) => {};
UserService.delete = (req, res) => {};

UserService.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //search in database if exist the email
    const existEmail = await UserModel.countDocuments({ email });
    if (existEmail === 0) {
      return res.status(400).json({ message: "El usuario no existe" });
    } else if (existEmail === 1) {
      //if exist, compare the password
      const user = await UserModel.findOne({ email });
      const passwordMatch = await verifyPassword(password, user.password);
      if (passwordMatch) {
        /* const token = await user.generateAuthToken();
        res.status(200).json({ token }); */
        res.status(200).json({ login: "true" });
      } else {
        res.status(400).json({ message: "Contraseña incorrecta" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al iniciar sesion" });
  }
};

module.exports = UserService;
