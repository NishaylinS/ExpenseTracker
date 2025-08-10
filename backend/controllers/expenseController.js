
const User = require("../models/User")
const xlsx = require("xlsx");
const Expense = require("../models/Expense")

//Add Expense Source 
exports.addExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const {icon, source, amount, date }= req.body;

        //Validation: Check for missing fields 
        if(!category || !amount || !date){
            return res.status(400).json({message: "All fields are required"})
        }

        const newExpense = new Expense({
            userId,
            icon,
            source,
            amount,
            date: new Date(date)
        });

        await newExpense.save();
        res.Status(200).json(newIncome)
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
    }


}

//Get All Expense SOurce 
exports.getAllExpense = async (req, res) => {
    const userId = req.user.id;

    try {
        const expense = await Expense.find({userId}).sort({date: -1});
        res.json(expense);
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
    }
}

//Delete Expense Source 
exports.deleteExpense = async (req, res) => {
    try {
        await Expense.findOneAndDelete(req.params.id);
        res.json({message: "Expense Deleted Successfully"})
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
    }
}

//Download Expense Excel
exports.downloadExpenseExcel = async (req, res) => {
    const userId = req.user.id;

    try {
        const expense = await Expense.find({userId}).sort({date: -1});

        //Prepare data for excel 
        const data = expense.map ((item) => ({
            category: item.category,
            Amount: item.amount,
            Date: item.date,
        }));

        const wb = writeXLSX.utils.book_new();
        const ws = writeXLSX.utils.json_to_sheet(data);
        writeXLSX.utils.book_append_sheet(wb. ws, "Expense");
        writeXLSX.writeFile(wb, 'expense_details.xlsx');
        res.download('expense_details.xlsx');
    }catch(error){
        res.status(500).json({message: "Internal Server Error"})
    }
};