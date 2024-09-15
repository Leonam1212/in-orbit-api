import { count, eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions } from '../db/schema'
import { PgTable } from 'drizzle-orm/pg-core'
import { TableConfig } from 'drizzle-orm/mysql-core'

interface CreateGoalCompletionRequest {
  goalCompletionId: string
}

export async function deleteGoalCompletion({
  goalCompletionId,
}: CreateGoalCompletionRequest) {
  const result = await db
    .delete(goalCompletions)
    .where(eq(goalCompletions.id, goalCompletionId))
    .returning()

  if (result.length === 0) {
    throw new Error('Goal completion not found')
  }

  const goalCompletionDeleted = result

  return { goalCompletionDeleted, message: 'Goal Completion Deleted' }
}
