import e from "express";
import { getText, setText } from "../controllers/text.controller.js";

const troute = e.Router();


troute.post('/Stext',setText);
troute.get("/Gtext",getText);


export default troute;