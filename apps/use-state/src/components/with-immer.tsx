import { useImmer } from 'use-immer'

type Task = {
  id: number
  name: string
  isComplete: boolean
}

function Task({
  task,
  onChange
}: {
  task: Task
  onChange: (val: boolean) => void
}) {
  return (
    <div>
      <input
        type='checkbox'
        checked={task.isComplete}
        onChange={e => onChange(e.target.checked)}
      />
    </div>
  )
}

export default function WithImmer() {
  const [tasks, updateTask] = useImmer([
    { id: 0, name: 'Buy apples', isComplete: false },
    { id: 1, name: 'Buy bananas', isComplete: true },
    { id: 2, name: 'Buy oranges', isComplete: false },
    { id: 3, name: 'Buy grapes', isComplete: true },
    { id: 5, name: 'Buy kiwi', isComplete: true },
    { id: 6, name: 'Buy cherry', isComplete: true }
  ])

  function updateState(id: number, e: boolean) {
    updateTask(draft => {
      const task = draft.find(obj => obj.id === id)
      if (task) {
        task.isComplete = e
      }
    })
  }

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <Task task={task} onChange={e => updateState(task.id, e)} />
        </div>
      ))}
      {JSON.stringify(tasks)}
    </div>
  )
}
