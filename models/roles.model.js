const dbConfig = require("../config/db.config");

const RoleSchema = new Schema({
  name: {
    type: String,
    required: [true, "Role is required"],
  },
});

const RoleModel = mongoose.model("Role", RoleSchema);

mongoose.connect(`${dbConfig.mongoHost}/${dbConfig.mongoDb}`);

module.exports = RoleModel;
