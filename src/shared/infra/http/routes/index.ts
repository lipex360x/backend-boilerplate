import { Router } from 'express'

import authRoutes from '@shared/middlewares/authRoutes/routes/auth.routes'
import usersRoutes from '@modules/users/infra/http/routes/users.routes'

const routes = Router()

routes.get('/', (request, response) => {
  response.json({ message: 'Hello World' })
})

routes.use('/auth', authRoutes)
routes.use('/users', usersRoutes)

export default routes
