import express from 'express'

import restaurants from './restaurants'
import authentication from './authentication'
import { ensureLoggedIn } from '../middlewares'


const routes = express.Router()
routes.use('/', authentication)

routes.use(ensureLoggedIn)

routes.get('/', (req, res) => res.redirect('/restaurants'))
routes.use('/restaurants', restaurants)


export default routes
