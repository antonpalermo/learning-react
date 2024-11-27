import React from 'react'

type Task = {
  id: number
  name: string
  isComplete: boolean
}

function Task(props: { task: Task; onComplete: (task: Task) => void }) {
  return (
    <div>
      <input
        id='isComplete'
        type='checkbox'
        name='isComplete'
        checked={props.task.isComplete}
        onChange={e =>
          props.onComplete({ ...props.task, isComplete: !e.target.checked })
        }
      />
      {props.task.name}
    </div>
  )
}

export default function ArrayState() {
  const [tasks, setTasks] = React.useState([
    { id: 0, name: 'Buy apples', isComplete: false },
    { id: 1, name: 'Buy bananas', isComplete: true },
    { id: 2, name: 'Buy oranges', isComplete: false },
    { id: 3, name: 'Buy grapes', isComplete: true },
    { id: 5, name: 'Buy kiwi', isComplete: true },
    { id: 6, name: 'Buy cherry', isComplete: true }
  ])

  function changeTaskStatus(id: number, current: boolean) {
    const currentIndex = tasks.findIndex(task => task.id === id)
    const task = tasks[currentIndex]
    if (currentIndex !== -1) {
      return { ...task, isComplete: (task.isComplete = !current) }
    }
    return null
  }

  function handleOnTaskComplete(task: Task) {
    const updatedTask = changeTaskStatus(task.id, task.isComplete)

    if (!updatedTask) {
      return console.log('no avail task')
    }

    setTasks(prev => prev.map(t => (t.id === task.id ? updatedTask : t)))
  }

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <Task task={task} onComplete={handleOnTaskComplete} />
        </div>
      ))}
      {JSON.stringify(tasks)}
    </div>
  )
}
