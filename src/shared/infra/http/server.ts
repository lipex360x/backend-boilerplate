import app from './app'
import http from 'http'
import socketIo from '@shared/socket'

const apiServer = app.listen(process.env.API_PORT, () => {
  console.log(`\n🚀 API Started on port ${process.env.API_PORT} \n😉 Check Hello Message at ${process.env.API_URL}:${process.env.API_PORT}/hello`)
})

const serverIo = http.createServer(app)
const socketServer = serverIo.listen(process.env.SOCKET_PORT, () => {
  console.log(`🙌 Socket iniciado na porta ${process.env.SOCKET_PORT}`)
  socketIo(socketServer)
})

process.on('SIGINT', () => {
  console.log('\n🔒 API Stopped')
  apiServer.close()
  socketServer.close()
  process.exit()
})
