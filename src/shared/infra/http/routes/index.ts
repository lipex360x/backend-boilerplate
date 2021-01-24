import { Router } from 'express'

import authRoutes from '@shared/middlewares/authRoutes/routes/auth.routes'
// import module.routes from '@module/.../infra/http/routes/module.routes.ts'

const routes = Router()

// routes.use(module.routes)

routes.get('/', (request, response) => {
  response.json({ message: 'Hello World' })
})

routes.use('/auth', authRoutes)

export default routes
