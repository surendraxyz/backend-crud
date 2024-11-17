import express from "express";
import controller from "../controllers/controllers.js";

const router = express.Router();

router.post("/create/", controller.createUser);
router.get("/getuser/", controller.getUser);
router.get("/detail/:id", controller.userDetails);
router.put("/userupdate/:id", controller.userUpdate);
router.delete("/delete/:id", controller.deleteUser);

export default router;
