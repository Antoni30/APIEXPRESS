import express from "express";
import { getTask,postTask,getAnTask, deleteTask, updateTask} from "../controllers/task.js";

const router = express.Router();

//crearte Task
router.post("/task",postTask);

//Get tasks
router.get("/task",getTask);

//Get an task
router.get("/task/:id", getAnTask);

//update an task
router.put("/task/:id", updateTask);

//delete an task
router.delete("/task/:id",deleteTask);



export default router;
