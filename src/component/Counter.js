import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/counterslice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);

  const Dispatch = useDispatch();
  //   console.log(Dispatch(increment()));

  return (
    <div>
      <p>redux counter Test</p>
      <h1>{count}</h1>
      <button onClick={() => Dispatch(increment())}>increment</button>
      <button onClick={() => Dispatch(decrement())}>decrement</button>
      <button onClick={() => Dispatch(incrementByAmount(100))}>
        increment 100
      </button>
    </div>
  );
};

export default Counter;
