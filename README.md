### server

```js
  import express from 'express';
  import cors from 'cors';
  import http from 'http'
  import { Server } from 'socket.io';

  const app = express();

  app.use(cors());

  const server = http.createServer(app);

  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3003',
      methods: ['GET', 'POST']
    }
  })

  io.on('connection', (socket) => {
    // console.log(socket);
    console.log(`User connected: ${socket.id}`);

    // socket.on('send_msg', data => {
    //   console.log(data);
    //   socket.broadcast.emit('receive_msg', data);
    // })

    socket.on('send_msg', data => {
      console.log(data);
      socket.to(data.room).emit('receive_msg', data);
    })
  })

  server.listen(3030, () => {
    console.log('Server Listening on 3030'); 
  })
```