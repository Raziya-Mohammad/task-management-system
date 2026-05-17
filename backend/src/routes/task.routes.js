import express from "express";

import protect
from "../middleware/auth.middleware.js";

import {

createTask,
getAllTasks,
updateTask,
deleteTask

}
from
"../controllers/task.controller.js";

const router=
express.Router();

router.post(
"/",
protect,
createTask
);

router.get(
"/",
protect,
getAllTasks
);

router.put(
"/:id",
protect,
updateTask
);

router.delete(
"/:id",
protect,
deleteTask
);

export default router;