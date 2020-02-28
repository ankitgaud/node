var express = require("express");
var router = express.Router();

const {
  fetch_data,
  create_data,
  delete_data,

  fetch_data_with_date,
  remove_data_by_date_and_projectid,
  update_worksheet_data
} = require("../../controller/worksheet");

router.post("/delete", remove_data_by_date_and_projectid);

//fetch data from worksheet
router.get("/fetchdata", fetch_data);

// save data from worksheet
router.post("/save", create_data);

// delete data from worksheet
router.post("/removeuser", delete_data);

// fetch data with date
router.get("/date/fetchdata", fetch_data_with_date);

// update data
router.post("/update", update_worksheet_data);

module.exports = router;
