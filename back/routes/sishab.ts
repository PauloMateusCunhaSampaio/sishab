import { Router } from 'express';
import { questions } from '../controllers/sishab_controller';
import { auth } from '../controllers/accounts_controller';

const routes = Router()

routes.use(auth.auth_routes)
routes.get('/1', questions.get1)
routes.get('/2', questions.get2)
routes.get('/3', questions.get3)
routes.get('/4', questions.get4)
routes.get('/5', questions.get5)
routes.get('/6', questions.get6)
routes.get('/7', questions.get7)
routes.get('/8', questions.get8)
routes.get('/9', questions.get9)
routes.get('/10', questions.get10)

module.exports = routes;