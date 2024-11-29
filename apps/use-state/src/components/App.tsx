import style from './App.module.css'
import InputState from './input-state'
import BooleanState from './boolean-state'
import ObjectState from './object-state'
import BasicState from './basic-state'
import NestedObjectState from './nested-object-state'
import ArrayState from './array-state'
import WithImmer from './with-immer'

function App() {
  return (
    <div className={style.container}>
      <BasicState />
      <InputState />
      <BooleanState />
      <ObjectState />
      <NestedObjectState />
      <ArrayState />
      <WithImmer />
    </div>
  )
}

export default App
