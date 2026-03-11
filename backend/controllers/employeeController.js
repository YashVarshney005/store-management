const Employee = require("../models/employeeModel");


// CREATE EMPLOYEE
exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};


// GET ALL EMPLOYEES
exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();

    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};


// GET EMPLOYEE BY ID
exports.getEmployeeById = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};


// UPDATE EMPLOYEE
exports.updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};


// DELETE EMPLOYEE
exports.deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    next(error);
  }
};


// SEARCH EMPLOYEE
exports.searchEmployee = async (req, res, next) => {
  try {
    const { name, department } = req.query;

    const query = {};

    if (name) {
      query.fullName = { $regex: name, $options: "i" };
    }

    if (department) {
      query.department = department;
    }

    const employees = await Employee.find(query);

    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};