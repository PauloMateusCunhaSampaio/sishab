import { Router } from "express";
import { visitas } from "../controllers/visitas_controller";

const routes = Router()

routes.route('/conta_cidades')
    .post(visitas.count_visits_city);

module.exports = routes;