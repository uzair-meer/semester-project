import mongoose from "mongoose";
import StudentModel from "../models/Student.js";

class StudentController {
  static getAllStu = async (req, res) => {
    try {
      const result = await StudentModel.find();
      res.render("index", { data: result });
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  // editing
  static editStu = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await StudentModel.findById(id);

      // passin data to edit
      res.render("edit", { data: result });
    } catch (error) {}
  };
  // getting single stu
  static getStu = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await StudentModel.findById(id);

      // passin data to edit
      res.render("student", { data: result });
    } catch (error) {}
  };
  static updateStu = async (req, res) => {
    try {
      const id = req.params.id;
      // console.log(id);
      const result = await StudentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };
  static createStu = async (req, res) => {
    try {
      const { name, age, fee } = req.body;
      const newStu = new StudentModel({
        name,
        age,
        fee,
      });
      // saving

      const result = await newStu.save();
      // console.log(result);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };
  static deleteStu = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await StudentModel.findByIdAndDelete(id);
      res.redirect("/");
    } catch (error) {}
  };
}
export default StudentController;
