const Connection = require("../BaseConnection");
const { successRoute, route } = require("./index");

const {
  createData,
  fetchData,
  deleteData,

  fetchDataWithDate,
  removeDataByProjectAndDate,
  updateWorksheetData
} = require("../model/worksheetModel");

const update_worksheet_data = route(async function(req, res) {
  try {
    let url = "/v1/worksheet/update";
    let data = await updateWorksheetData(req.body);
    res.send(successRoute(data, url));
  } catch (error) {
    throw error;
  }
});

const remove_data_by_date_and_projectid = route(async function(req, res) {
  try {
    let url = "/v1/worksheet/delete";
    let data = await removeDataByProjectAndDate(req.body);
    res.send(successRoute(data, url));
  } catch (error) {
    throw error;
  }
});

const fetch_data_with_date = route(async function(req, res) {
  try {
    let url = "/v1/worksheet/fetchdata";
    let data = await fetchDataWithDate(req.body);
    res.send(successRoute(data, url));
  } catch (error) {
    throw error;
  }
});

const create_data = route(async function(req, res) {
  try {
    let url = "/v1/worksheet/save";
    let savedata = await createData(req.body);

    res.send(successRoute(savedata, url));
  } catch (error) {
    throw error;
  }
});

const fetch_data = route(async function(req, res) {
  try {
    let url = "/v1/worksheet/fetchdata";
    let fetchdata = await fetchData(req.body);

    res.send(successRoute(fetchdata, url));
  } catch (error) {
    throw error;
  }
});

const delete_data = route(async function(req, res) {
  try {
    let data = await deleteData(req.body);
    let url = "/v1/worksheet/removeuser";

    res.send(successRoute(data, url));
  } catch (error) {
    throw error;
  }
});

module.exports = {
  fetch_data,
  create_data,
  delete_data,

  fetch_data_with_date,
  remove_data_by_date_and_projectid,
  update_worksheet_data
};
