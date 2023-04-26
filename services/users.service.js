const UserService = () => {};
const UserModel = require("../models/users.model");

/* Middlewares */
const { hashPassword } = require("../utils/password.hash");

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

module.exports = UserService;
