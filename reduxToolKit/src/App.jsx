
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counter.Slice'

function App() {
  const count = useSelector((state) => state.counter.value)
  console.log(count)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      
    </>
  )
}

export default App
