import { container } from 'tsyringe'

import IUsersInterface from './interfaces/IUsersRepository'
import UsersRepository from '../infra/typeorm/repositories/UsersRepository'

const providers = {
  users: UsersRepository
}

container.registerSingleton<IUsersInterface>(
  'UsersRepository',
  providers.users
)
