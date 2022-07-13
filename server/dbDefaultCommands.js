const sqlite = require("aa-sqlite");
let dropTable1 = `
drop table if exists contact;
`;
let dropTable2 = `


drop table if exists contact_image

`;
let createTable1 = `
    create table contact_image (
        id integer primary key autoincrement,
        path text not null,
        created_at timestamp default current_timestamp
    );
    
`;
let createTable2 = `
create table contact (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name text not null,
  phone text ,
  email text ,
  img_id INTEGER   ,
  created_at timestamp default current_timestamp,
  FOREIGN KEY (img_id)
  REFERENCES contact_image (id) 
  );
`;
let insertTables1 = `
      insert into contact (name ,phone,  img_id) values
      ('Timothy Lewis', '+36 01 234 5678', 6),
      ('Sarah Wright', '+36 01 234 5678', 5),
      ('Lucy Jones', '+36 01 234 5678', 4),
      ('Jake Perez', '+36 01 234 5678', 3),
      ('Adebayo Rodriguez', '+36 01 234 5678', 1)
`;
let insertTables2 = `
        insert into contact_image (path)
        values 
        
        ('images/Adebayo.png'),
        ('images/Jacqueline.png'),
        ('images/Jake.png'),
        ('images/Lucy.png'),
        ('images/Sarah.png'),
        ('images/Timothy.png')
`;
let sqlImages = `
        select * from contact_image
  `;
let sqlContacts = `
  select * from contact
`;
createDatabase = async () => {
  try {
    await sqlite.open("./test.db");
    await sqlite.run(dropTable1);
    await sqlite.run(dropTable2);
    await sqlite.run(createTable1);
    await sqlite.run(createTable2);
    await sqlite.run(insertTables1);
    await sqlite.run(insertTables2);

    const db_result_image = await sqlite.all(sqlImages);
    const db_result_contact = await sqlite.all(sqlContacts);
    console.log(db_result_image);
    console.log(db_result_contact);
  } catch (error) {
    console.log(error);
  }
};

createDatabase();
