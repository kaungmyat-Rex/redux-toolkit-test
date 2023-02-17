import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, filtertodo } from "../redux/todolistSlice";

const Todolist = () => {
  const [input, setInput] = useState("");

  // const todoArray = useSelector(
  //   (state) =>
  //     const all = state.todolist.todoArray;
  //     const filter = state.todolist.filterId;
  //     if (filter === null) {
  //       return all;
  //     } else {
  //       return all.filter((e) => e.id !== filter);
  //     }

  //     state.todolist.todoArray
  // );

  const todoArray = useSelector((state) => state.todolist.todoArray);
  console.log(todoArray);
  const Dispatch = useDispatch();

  const submitFun = () => {
    const random = Math.floor(Math.random() * 100);

    Dispatch(addtodo({ id: random, name: input }));
  };

  const deletefun = (id) => {
    Dispatch(filtertodo(id));
  };
  // const [toObj, settoObj] = useState([
  //   useSelector((state) => state.todolist.todoArray),
  // ]);
  return (
    <div style={{ marginTop: "100px" }}>
      <p>redux To do list Test</p>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {todoArray.map((e, index) => (
        <>
          <p key={index}>{e.name}</p>
          <button onClick={() => deletefun(e.id)}>delete</button>
        </>
      ))}

      <button onClick={() => submitFun()}>submit</button>
    </div>
  );
};

export default Todolist;
