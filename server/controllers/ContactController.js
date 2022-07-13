const Contact = require("../models/Contact");
const ContactImage = require("../models/ContactImage");
module.exports.deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userResult = await Contact.fetchById(id);
    console.log(userResult);
    if (userResult.img_id) {
      const imageResult = await ContactImage.fetchById(userResult.img_id);
      await ContactImage.deleteContactImage(imageResult.id, imageResult.path);
    }
    await Contact.deleteContact(userResult.id);
    res.status(200).json();
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
module.exports.getAllContact = async (req, res, next) => {
  try {
    const allContactResult = await Contact.fetchAll();
    const contacts = [];
    for (let index = 0; index < allContactResult.length; index++) {
      let contactImage = null;

      if (allContactResult[index].img_id) {
        const imagePromise = await ContactImage.fetchById(
          allContactResult[index].img_id
        );
        contactImage = new ContactImage(
          imagePromise.id,
          imagePromise.path,
          imagePromise.created_at
        );
      }
      contacts.push(
        new Contact(
          allContactResult[index].id,
          allContactResult[index].name,
          allContactResult[index].phone,
          allContactResult[index].email,
          contactImage,
          allContactResult[index].created_at
        )
      );
    }
    res.status(200).json(contacts);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
module.exports.createContact = async (req, res, next) => {
  try {
    let { name, phone, email, img_id } = req.body;

    const result = await Contact.createContact(name, phone, email, img_id);
    res.status(200).json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
module.exports.editContact = async (req, res, next) => {
  try {
    //const { id } = req.params;
    let { id, name, phone, email, img_id } = req.body;
    console.log(id, name, phone, email, img_id);
    const contactResult = await Contact.fetchById(id);
    console.log(contactResult);
    if (contactResult.img_id) {
      if (img_id !== contactResult.img_id) {
        const imageResult = await ContactImage.fetchById(contactResult.img_id);
        await ContactImage.deleteContactImage(imageResult.id, imageResult.path);
      }
    }

    await Contact.editContact(id, name, phone, email, img_id);
    res.status(200).json(id, name, phone, email, img_id);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
