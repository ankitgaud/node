const { createConnection } = require("typeorm");

BaseConnection = async () => {
  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "intranetDatabase",
    synchronize: true,
    logging: false,
    entities: [
      require("./entity/WorksheetSchema"),
      require("./entity/UserSchema"),
      require("./entity/projectSchema"),
      require("./entity/TechLabelSchema"),
      require("./entity/attendenceSchema"),
      require("./entity/roleSchema"),
      require("./entity/teamSchema")
    ]
  });

  return connection;
};

module.exports = BaseConnection();
