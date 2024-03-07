const router = require("express").Router();
const {getAllBarFilter, getAllTopic, getYearPogress, getGeoPogress, getDataList, getTopData} =require("../controllers/dashboard")

router.post("/intensity/:parameter/:aboutParam",getAllBarFilter);
router.post("/year-progress/:parameter/:aboutParam",getYearPogress);
router.post("/geo-progress/:parameter/:aboutParam",getGeoPogress);
router.get("/top-data/:parameter/:aboutParam",getTopData);
router.get("/topics",getAllTopic);
router.get("/:name",getDataList);



module.exports = router