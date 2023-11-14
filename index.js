import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import cors from 'cors'
import { router } from "./router.js";
import { ControladorSeguridad } from "./controladores/controladorSeguridad.js";

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    cookie: { maxAge: 12000 },
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))
//Crear una instancia de ControladorSeguridad para que se carguen los permisos
//Esto se puede meter en un middleware y usarlo con app.use()
const cs = new ControladorSeguridad()
app.use('/', router);

const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));