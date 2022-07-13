const ContactImage = require("../models/ContactImage");

exports.upload = async (req, res, next) => {
  try {
    if (!req.files) {
      res.status(404).send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      let avatar = req.files.avatar;
      avatar.name = Date.now() + "-" + avatar.name;
      avatar.mv("./public/images/" + avatar.name);
      let path = "images/" + avatar.name;
      const createResult = await ContactImage.createImage(path);
      res.send({
        status: true,
        message: "File is uploaded",
        img_id: createResult.id,
      });
    }
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
