const express = require("express")
const {
    addIncome,
    getAllIncome,
    deleteIncome,
    downloadIncomeExcel
} = require("../controllers/incomeController");

const router = express.Router();

router.post("/add",addIncome);
router.get("/get", getAllIncome);
router.delete("/downloadexcel", downloadIncomeExcel);
router.get("/:id", deleteIncome);

module.exports = router;
