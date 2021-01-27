import { Server } from 'socket.io'

export default function (server: any) {
  const io = new Server(server, {
    allowEIO3: true,
    cors: {
      origin: 'http://localhost:3000',
      credentials: true
    }
  })

  io.on('connection', (client: any) => {
    // Socket Emit Message
    client.emit('backend', `Hello from Backend ${new Date().getTime()}`)

    // Socket Receive Message
    client.on('frontend', (message: string) => {
      console.log(message)
    })
  })
}
