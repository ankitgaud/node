const EntitySchema = require("typeorm").EntitySchema;
const Teams = require("../classModel/teamClass").Teams;

module.exports = new EntitySchema({
  name: "Teams",
  target: Teams,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    user_id: {
      type: "int",
      nullable: false
    },
    project_id: {
      type: "int",
      nullable: true
    },
    status: {
      type: "boolean",
      nullable: true
    },
    created_at: {
      type: "timestamp",
      nullable: true
    },
    update_at: {
      type: "timestamp",
      nullable: true
    }
  }
});
