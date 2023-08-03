import { Router } from "express";
import { auth } from "../controllers/accounts_controller";

const routes = Router()

routes.route('/cadastrar')
    .post(auth.sign_up);

routes.route('/login')
    .post(auth.login);

module.exports = routes;
