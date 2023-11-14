import { Router } from "express";
import { validarInfoLogin } from "./middlewares/validarInfoLogin.js";
import { validarSesion } from "./middlewares/validarSesion.js";
import { verificarEmail } from "./validaciones/VerificarEmail.js";
import { verificarRespuesta } from "./validaciones/VerificarRespuesta.js";
import { ControladorDispatcher } from "./controladores/controladorDispatcher.js";
import { ControladorSesion } from "./controladores/controladorSesion.js";
import { procesar } from "./bo/Procesar.js";

export const router = Router();

router.post('/login', validarInfoLogin, ControladorDispatcher.servirHome)
router.get('/logout', ControladorSesion.cerrarSesion)

router.post('/verificarEmail', verificarEmail)
router.post('/verificarRespuesta', verificarRespuesta)
router.post('/procesar', validarSesion, procesar)