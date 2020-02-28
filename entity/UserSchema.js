const EntitySchema = require("typeorm").EntitySchema;
const Users = require("../classModel/usersClass").Users;

module.exports = new EntitySchema({
  name: "Users",
  target: Users,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    name: {
      type: "varchar",
      nullable: false
    },
    email: {
      type: "varchar",
      nullable: false
    },
    email_verified_at: {
      type: "timestamp",
      nullable: true
    },
    password: {
      type: "varchar",
      nullable: false
    },
    role_id: {
      type: "int",
      nullable: true
    },
    phone: {
      type: "varchar",
      nullable: true
    },
    mobile: {
      type: "varchar",
      nullable: true
    },
    emergency_contact_no: {
      type: "varchar",
      nullable: true
    },
    emergency_contact_name: {
      type: "varchar",
      nullable: true
    },
    designation: {
      type: "varchar",
      nullable: true
    },
    dob: {
      type: "date",
      nullable: true
    },
    doj: {
      type: "date",
      nullable: true
    },
    hire_date: {
      type: "date",
      nullable: true
    },
    emp_id: {
      type: "varchar",
      nullable: false
    },
    resignation_date: {
      type: "date",
      nullable: true
    },
    city: {
      type: "varchar",
      nullable: true
    },
    address: {
      type: "text",
      nullable: true
    },
    reporting_to: {
      type: "int",
      nullable: true
    },
    bg: {
      type: "varchar",
      nullable: true
    },
    profile_pic: {
      type: "text",
      nullable: true
    },
    resume_url: {
      type: "text",
      nullable: true
    },
    branch_id: {
      type: "varchar",
      nullable: true
    },
    current_salary: {
      type: "int",
      nullable: true
    },
    user_type: {
      type: "varchar",
      nullable: true
    },
    status: {
      type: "boolean",
      nullable: true
    },
    remember_token: {
      type: "varchar",
      nullable: true
    },
    created_at: {
      type: "timestamp",
      nullable: true
    },
    update_at: {
      type: "timestamp",
      nullable: true
    },
    deleted_at: {
      type: "timestamp",
      nullable: true
    }
  }
});
