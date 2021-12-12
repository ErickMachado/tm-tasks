import { datatype, lorem } from 'faker'

export const buildTask = (isComplete = true) => ({
  complete: isComplete,
  id: datatype.uuid(),
  title: lorem.word()
})

export const buildCompletedTasks = () => [
  buildTask(true),
  buildTask(true),
  buildTask(true)
]

export const buildIncompleteTasks = () => [
  buildTask(false),
  buildTask(false),
  buildTask(false)
]
