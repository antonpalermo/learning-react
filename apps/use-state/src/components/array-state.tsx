import React from 'react'

function Task(props: {
  task: { id: number; name: string; isComplete: boolean }
  onComplete: (id: number, status: boolean) => void
}) {
  return (
    <div>
      <input
        id='isComplete'
        type='checkbox'
        name='isComplete'
        checked={props.task.isComplete}
        onChange={e => props.onComplete(props.task.id, e.target.checked)}
      />
      {props.task.name}
    </div>
  )
}

export default function ArrayState() {
  const [tasks, setTasks] = React.useState([
    { id: 0, name: 'Buy apples', isComplete: false },
    { id: 1, name: 'Buy bananas', isComplete: true },
    { id: 2, name: 'Buy oranges', isComplete: false }
  ])

  function handleOnTaskComplete(id: number, complete: boolean) {
    const taskIndex = tasks.findIndex(e => e.id === id)
    const updatedTasks = tasks.splice(taskIndex, 1, {
      id,
      name: '',
      isComplete: complete
    })

    setTasks(updatedTasks)
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
