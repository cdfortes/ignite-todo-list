/* eslint-disable @typescript-eslint/ban-types */
import { Factory, Model, Server, Registry } from 'miragejs'
import Schema from 'miragejs/orm/schema'
import { faker } from '@faker-js/faker'
import { ModelDefinition } from 'miragejs/-types'

type Todo = {
  id: number
  title: string
  completed: boolean
}

const TodoModel: ModelDefinition<Todo> = Model

type AppRegistry = Registry<{ todos: typeof TodoModel }, {}>

type AppSchema = Schema<AppRegistry>

export function mirageServer(environment = 'development') {
  return new Server({
    environment,
    models: {
      todo: Model
    },

    factories: {
      todo: Factory.extend({
        title: faker.lorem.paragraph(),
        completed: faker.datatype.boolean()
      })
    },

    seeds(server) {
      server.createList('todo', 2)
    },

    routes() {
      this.namespace = 'api'

      this.get('/todos', (schema) => {
        return schema.all('todo')
      })

      this.post('/todos', (schema: AppSchema, request) => {
        const { title }: Todo = JSON.parse(request.requestBody)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        return schema.create('todo', { title })
      })

      this.put('/todos/:id', (schema: AppSchema, request) => {
        const { id } = request.params
        const { title } = JSON.parse(request.requestBody)
        return schema.db.todos.find(id).update({ title })
      })

      this.delete('/todos/:id', (schema: AppSchema, request) => {
        const { id } = request.params

        return schema.db.todos.find(id).destroy()
      })
    }
  })
}
