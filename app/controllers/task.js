import Task from "../models/task.js";

const getTask = async (req, res) => {
    try {
      const addTask = await Task.find();
      res.status(201).json(addTask);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
  }

const getAnTask = async (req, res) => {
    const { id } = req.params;
    try {
      const addTask = await Task.findById(id);
      res.status(201).json(addTask);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
  }

const postTask = async (req, res) => {
    const task = Task(req.body);
    try {
      const addTask = await task.save();
      res.status(201).json(addTask);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error al guardar la tarea");
    }
}
const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, done } = req.body;
    try {
      const addTask = await Task.updateOne(
        { _id: id },
        { $set: { title, description, done } }
      );
      res.status(201).json(addTask);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
  }

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
      const addTask = await Task.deleteOne({_id: id});
      res.status(201).json(addTask);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error No se encuentra ningun dato");
    }
  }

export {getTask,getAnTask,postTask,updateTask,deleteTask};