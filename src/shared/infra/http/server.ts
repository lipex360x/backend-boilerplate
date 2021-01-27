import app from './app'
import http from 'http'
import socketIo from '@shared/socket'

const server = http.createServer(app)

const setServer = server.listen(3333, () => {
  console.log('🚀 API Started on port 3333')

  socketIo(setServer)
})

process.on('SIGINT', () => {
  console.log('\n🔒 API Stopped')
  setServer.close()
  process.exit()
})
