import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import { router } from "./router.js";

dotenv.config({path: "./credentials.env"});
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(express.static("vistas_react"));
app.use(cookieParser());
app.use(session({
    cookie: { maxAge: 12000 },
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false
}))
app.use('/', router);

const PORT = process.env.PORT ?? 1234;
console.log('hello world')
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));