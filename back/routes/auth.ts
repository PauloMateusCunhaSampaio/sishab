import { Router } from "express";
import { auth } from "../controllers/accounts_controller";

const routes = Router()

routes.post('/cadastrar', auth.sign_up)
routes.post('/login', auth.login)

module.exports = routes;
