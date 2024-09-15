import fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { createGoalRoute } from './routes/create-goal'
import { getPendingGoalRoute } from './routes/get-pending-goals'
import { createCompletionRoute } from './routes/create-completion'
import { getWeekSummaryRoute } from './routes/get-week-summary'
import fastifyCors from '@fastify/cors'
import { deleteCompletionRoute } from './routes/delete-goal-completion'
import { env } from '../env'

const app = fastify().withTypeProvider<ZodTypeProvider>()
app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createGoalRoute)
app.register(getPendingGoalRoute)
app.register(createCompletionRoute)
app.register(getWeekSummaryRoute)
app.register(deleteCompletionRoute)

app
  .listen({
    host: '0.0.0.0',
    port: Number(env.PORT) || 3333,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
