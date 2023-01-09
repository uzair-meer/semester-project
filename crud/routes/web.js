import express from "express";

import studentController from "../controllers/StudentHomeController.js";
const router = express.Router();
router.get("/", studentController.getAllStu);
router.post("/", studentController.createStu);
router.get("/student/:id", studentController.getStu);
router.get("/edit/:id", studentController.editStu);
router.post("/update/:id", studentController.updateStu);
router.post("/delete/:id", studentController.deleteStu);

export default router;
