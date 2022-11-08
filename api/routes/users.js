import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  updateUser
} from "../controller/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user")
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello, you are logged in");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin, you are logged in and you can delete all accounts");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);
//DELETE
router.delete("/:id", verifyUser, deleteUser);
//GET
router.get("/:id", verifyUser, getUserById);
//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
