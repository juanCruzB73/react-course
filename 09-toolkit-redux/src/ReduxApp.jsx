import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,incrementByAmount } from './store/slices/counter';

export const ReduxApp = () => {

  const {counter}=useSelector(state =>state.counter)

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {counter}</p>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementByAmount(2))}>Increment By Amount</button>
      {/*<button onClick={decrement}>Decrement</button>*/}
    </div>
  );
};