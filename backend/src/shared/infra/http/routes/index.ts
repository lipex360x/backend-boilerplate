import { Router } from 'express'

// import module.routes from '@module/.../infra/http/routes/module.routes.ts'

const routes = Router()

// routes.use(module.routes)

routes.get('/', (request, response) => {
  response.json({ message: 'Hello World' })
})

export default routes
