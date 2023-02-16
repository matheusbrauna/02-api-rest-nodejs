import fastify from 'fastify'

const app = fastify()

app.get('/hello', () => 'Hello world')

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP Server is running!'))
