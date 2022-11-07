import express from "express";
import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from "../controller/hotelController.js";

import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotelById);
//GET ALL
router.get("/", getHotels);

export default router;
