import { Router } from "express";
import { validarInfoLogin } from "./middlewares/validarInfoLogin.js";
import { verificarEmail } from "./validaciones/VerificarEmail.js";
import { ControladorDispatcher } from "./controladores/controladorDispatcher.js";
import { ControladorSesion } from "./controladores/controladorSesion.js";
import { verificarRespuesta } from "./validaciones/VerificarRespuesta.js";

export const router = Router();

router.post('/login', validarInfoLogin, ControladorDispatcher.servirHome)
router.get('/logout', ControladorSesion.cerrarSesion)

router.post('/verificarEmail', verificarEmail)
router.post('/verificarRespuesta', verificarRespuesta)