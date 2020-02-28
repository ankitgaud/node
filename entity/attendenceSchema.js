const EntitySchema = require("typeorm").EntitySchema;
const Attendances = require("../classModel/attendanceClass").Attendances;

module.exports = new EntitySchema({
  name: "Attendances",
  target: Attendances,
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
    date: {
      type: "date",
      nullable: true
    },
    in_time: {
      type: "timestamp",
      nullable: true
    },
    out_time: {
      type: "timestamp",
      nullable: true
    },
    status: {
      type: "int",
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
