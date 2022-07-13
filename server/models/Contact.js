const sqlite = require("aa-sqlite");

class Contact {
  constructor(id, name, phone, email, image, created_at) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.image = image;
    this.created_at = created_at;
  }
  static fetchById = async (id) => {
    try {
      await sqlite.open("./test.db");
      const db_result = await sqlite.get(
        `select * from contact where id = ${id}`
      );
      await sqlite.close();
      return db_result;
    } catch (error) {
      console.log(error);
    }
  };
  static fetchAll = async () => {
    try {
      await sqlite.open("./test.db");
      const db_result = await sqlite.all("select * from contact");
      await sqlite.close();
      return db_result;
    } catch (error) {
      console.log(error);
    }
  };
  static createContact = async (name, phone, email, img_id) => {
    try {
      let sql = `insert into contact (name,phone,email,img_id) values ('${name}','${phone}','${email}',${img_id})`;
      await sqlite.open("./test.db");
      const db_result = await sqlite.run(sql);
      await sqlite.close();
      return db_result;
    } catch (error) {
      console.log(error);
    }
  };
  static editContact = async (id, name, phone, email, img_id) => {
    try {
      let sql = `update contact set name = '${name}', phone = '${phone}', email='${email}', img_id = ${img_id} where id =${id}`;
      await sqlite.open("./test.db");
      console.log(sql);
      const db_result = await sqlite.run(sql);
      await sqlite.close();
      return db_result;
    } catch (error) {
      console.log(error);
    }
  };
  static deleteContact = async (id) => {
    try {
      let sql = `DELETE FROM contact
      WHERE id = ${id}`;
      await sqlite.open("./test.db");
      const db_result = await sqlite.run(sql);
      await sqlite.close();
      return db_result;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = Contact;
