import express from "express";
import { signin,login} from "./usercontroller.js"; // Import using ES module syntax

const router = express.Router();

router.post("/signin", signin);

 router.post("/login", login);


export default router; 
