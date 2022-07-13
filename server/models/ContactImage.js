const sqlite = require("aa-sqlite");
const fs = require("fs");

class ContactImage {
  constructor(id, path, created_at) {
    this.id = id;
    this.path = path;
    this.created_at = created_at;
  }
  static deleteContactImage = async (id, path) => {
    try {
      if (id != 1) {
        let sql = `DELETE FROM contact_image
      WHERE id = ${id}`;
        await fs.unlinkSync("./public/" + path);

        await sqlite.open("./test.db");
        const db_result = await sqlite.run(sql);
        await sqlite.close();
        return db_result;
      }
    } catch (error) {
      console.log(error);
    }
  };
  static fetchById = async (id) => {
    try {
      await sqlite.open("./test.db");
      const db_result = await sqlite.get(
        `select * from contact_image where id = ${id}`
      );
      await sqlite.close();
      return db_result;
    } catch (error) {
      console.log(error);
    }
  };
  static createImage = async (path) => {
    try {
      let sql = `insert into contact_image (path) values ('${path}') `;

      await sqlite.open("./test.db");

      await sqlite.run(sql);
      sql = "SELECT * FROM contact_image ORDER BY id DESC LIMIT 1;";
      let db_result = await sqlite.get(sql);
      await sqlite.close();

      return db_result;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ContactImage;
