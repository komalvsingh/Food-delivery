import express from "express";
import { addproduct,getproduct, getproid, updateProduct } from "./productcontroller.js";

const router = express.Router();

router.post("/addproduct", addproduct);
router.get("/getproduct", getproduct);
router.put("/updateproduct", updateProduct);
router.get("/:id" , getproid);

export default router;
