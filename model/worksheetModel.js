const Worksheet = require("../classModel/worksheetClass").Worksheet;
const Users = require("../classModel/usersClass").Users;
const Projects = require("../classModel/projectClass").Projects;
const Attendances = require("../classModel/attendanceClass").Attendances;
const { getConnection, getRepository } = require("typeorm");

const updateWorksheetData = async function(clientData) {
  try {
    let data = null;
    if (clientData.emp == "emp") {
      data = await getConnection()
        .createQueryBuilder()
        .update(Worksheet)
        .set({ hours_spend: clientData.hours_spend })
        .where(
          "user_id = :user_id AND project_id = :project_id AND date = :date",
          {
            user_id: clientData.user_id,
            project_id: clientData.project_id,
            date: clientData.date
          }
        )
        .execute();
    } else if (clientData.emp == "manager") {
      data = await getConnection()
        .createQueryBuilder()
        .update(Worksheet)
        .set({ task_type: clientData.task_type })
        .where(
          "user_id = :user_id AND project_id = :project_id AND date = :date",
          {
            user_id: clientData.user_id,
            project_id: clientData.project_id,
            date: clientData.date
          }
        )
        .execute();
    } else if (clientData.emp == "hr") {
      data = await getConnection()
        .createQueryBuilder()
        .update(Worksheet)
        .set({ task_type: clientData.task_type })
        .where(
          "user_id = :user_id AND project_id = :project_id AND date = :date",
          {
            user_id: clientData.user_id,
            project_id: clientData.project_id,
            date: clientData.date
          }
        )
        .execute();
    } else {
      data = "Data is not found!";
    }
    return data;
  } catch (error) {
    throw error;
  }
};

const createData = async function(clientData) {
  try {
    console.log(clientData);

    const data = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Worksheet)
      .values([
        {
          user_id: clientData.user_id,
          project_id: clientData.project_id,
          title: clientData.title,
          desc: clientData.desc,
          hours_spend: clientData.hours_spend,
          date: clientData.date,
          task_type: clientData.task_type,
          stack: clientData.stack,
          user_id: clientData.user_id,
          project_id: clientData.project_id,
          priority: clientData.priority,
          status: clientData.status,
          created_at: Date()
        }
      ])
      .execute();
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchData = async function(clientData) {
  try {
    let data = null;
    if (clientData.emp == "emp") {
      data = await getRepository(Worksheet)
        .createQueryBuilder("worksheet")
        .innerJoin(Users, "user", "user.id = worksheet.user_id")
        .innerJoin(Projects, "project", "project.id = worksheet.project_id")
        .innerJoin(
          Attendances,
          "atd",
          "atd.user_id = worksheet.user_id AND atd.date = worksheet.date"
        )
        .where(
          "worksheet.date = :date AND worksheet.user_id = :user_id AND worksheet.deleted_at is null",
          {
            user_id: clientData.user_id,
            date: clientData.date
          }
        )
        .select([
          "user.name",
          "user.designation",
          "worksheet",
          "project.title",
          "atd.in_time",
          "atd.out_time"
        ])
        .getRawMany();
    } else if (clientData.emp == "manager") {
      data = await getRepository(Worksheet)
        .createQueryBuilder("worksheet")
        .innerJoin(Users, "user", "user.id = worksheet.user_id")
        .innerJoin(Projects, "project", "project.id = worksheet.project_id")
        .innerJoin(
          Attendances,
          "atd",
          "atd.user_id = worksheet.user_id AND atd.date = worksheet.date"
        )
        .where(
          "worksheet.user_id = :user_id AND worksheet.deleted_at is null",
          {
            user_id: clientData.user_id
          }
        )
        .select([
          "user.name",
          "user.designation",
          "worksheet",
          "project.title",
          "atd.in_time",
          "atd.out_time"
        ])
        .getRawMany();
    } else if (clientData.emp == "hr") {
      data = await getRepository(Worksheet)
        .createQueryBuilder("worksheet")
        .innerJoin(Users, "user", "user.id = worksheet.user_id")
        .innerJoin(Projects, "project", "project.id = worksheet.project_id")
        .innerJoin(
          Attendances,
          "atd",
          "atd.user_id = worksheet.user_id AND atd.date = worksheet.date"
        )
        .where(
          "worksheet.user_id = :user_id AND worksheet.deleted_at is null",
          {
            user_id: clientData.user_id
          }
        )
        .select([
          "user.name",
          "user.designation",
          "worksheet",
          "project.title",
          "atd.in_time",
          "atd.out_time"
        ])
        .getRawMany();
    } else {
      data = "some went wrong!!";
    }

    if (data != null) {
      return data;
    } else {
      return "Data is not found";
    }
  } catch (error) {
    throw error;
  }
};

const deleteData = async function(clientData) {
  try {
    let data = await getConnection()
      .createQueryBuilder()
      .update(Worksheet)
      .set({ deleted_at: Date() })
      .where("user_id = :user_id", {
        user_id: clientData.user_id
      })
      .execute();
    return data;
  } catch (error) {
    throw error;
  }
};

const fetchDataWithDate = async function(clientData) {
  try {
    let data = null;
    if (clientData.emp == "EMP") {
      console.log("Employee is fetching data!");
      data = await getRepository(Worksheet)
        .createQueryBuilder("worksheet")
        .innerJoin(Users, "user", "user.id = worksheet.user_id")
        .innerJoin(Projects, "project", "project.id = worksheet.project_id")
        .innerJoin(
          Attendances,
          "atd",
          "atd.user_id = worksheet.user_id AND atd.date = worksheet.date"
        )
        .where(
          "worksheet.date = :date AND worksheet.user_id = :user_id AND worksheet.deleted_at is null",
          {
            user_id: clientData.user_id,
            date: clientData.date
          }
        )
        .select([
          "user.name",
          "user.designation",
          "worksheet",
          "project.title",
          "atd.in_time",
          "atd.out_time"
        ])
        .getRawMany();
      GET;
    } else if (clientData.emp == "SM") {
      console.log("Senior manager is fetching data!");
      data = await getRepository(Worksheet)
        .createQueryBuilder("worksheet")
        .innerJoin(Users, "user", "user.id = worksheet.user_id")
        .innerJoin(Projects, "project", "project.id = worksheet.project_id")
        .where(
          "worksheet.date = :date AND worksheet.user_id = :user_id AND worksheet.deleted_at is null",
          {
            user_id: clientData.user_id,
            date: clientData.date
          }
        )
        .select(["user.name", "worksheet", "project.title"])
        .getRawMany();
    } else {
      GET.innerJoin(Users, "user", "user.id = worksheet.user_id")
        .innerJoin(Projects, "project", "project.id = worksheet.project_id")
        .where(
          "worksheet.date = :date AND worksheet.user_id = :user_id AND worksheet.deleted_at is null",
          {
            user_id: clientData.user_id,
            date: clientData.date
          }
        )
        .select(["user.name", "worksheet", "project.title"])
        .getRawMany();
    }
    if (data.length > 0) {
      return data;
    } else {
      return "Data is not found";
    }
  } catch (error) {
    throw error;
  }
};

const removeDataByProjectAndDate = async function(clientData) {
  try {
    let data = await getConnection()
      .createQueryBuilder()
      .update(Worksheet)
      .set({ deleted_at: Date() })
      .where(
        "user_id = :user_id AND project_id = :project_id AND date = :date",
        {
          user_id: clientData.user_id,
          project_id: clientData.project_id,
          date: clientData.date
        }
      )
      .execute();

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchData,
  createData,
  deleteData,

  fetchDataWithDate,
  removeDataByProjectAndDate,
  updateWorksheetData
};
