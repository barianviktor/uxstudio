const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ContactRoutes = require("./Routes/ContactRoutes");
const ImageRoutes = require("./Routes/ImageRoutes");
const ErrorController = require("./controllers/ErrorController");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const ports = 5000;

app.use(express.static("public"));

app.use(cors());
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(bodyParser.json());

app.use("/contact", ContactRoutes);
app.use("/image", ImageRoutes);
app.use(ErrorController.get404);
app.use(ErrorController.get500);

app.listen(ports);
