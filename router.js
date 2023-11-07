import { Router } from "express";
import { validarInfoLogin } from "./middlewares/validarInfoLogin.js";
import { ControladorDispatcher } from "./controladores/controladorDispatcher.js";

export const router = Router();

router.post('/login', validarInfoLogin, ControladorDispatcher.servirHome)