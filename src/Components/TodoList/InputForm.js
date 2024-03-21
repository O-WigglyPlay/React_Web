import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.form`
  position: relative;
  width: 100%;
  margin-top: 20px;
  svg {
    width: 20px;
    height: 20px;
    color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 10px;
    left: 6px;
  }
`;

const TodoInput = styled.input`
  width: 100%;
  height: 43px;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  padding-left: 30px;
`;

export default function InputForm({ setGroup }) {
  const [newTodo, setNewTodo] = useState("");
  //인풋값을 입력받기
  const inputAddHandler = (e) => {
    const addTodo = e.target.value;
    setNewTodo(addTodo);
  };

  // 인풋에서 입력하고 추가만 하는 역할
  // const inputTodoListHandle = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     const inputValue = e.target.value;
  //     if (inputValue !== "") {
  //       const newTodo = {
  //         id: group.length,
  //         check: false,
  //         content: inputValue,
  //       };
  //       setGroup((prev) => [...prev, newTodo]);
  //       e.target.value = "";
  //     }
  //   }
  // };

  //입력받은것을 새로운 그룹에 추가해주기
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newObj = {
      id: Date.now,
      check: false,
      content: newTodo,
    };
    setGroup((prev) => [...prev, newObj]);
  };
  return (
    <Wrapper onSubmit={onSubmitHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>

      <TodoInput
        type="text"
        placeholder="Please enter your ToDo List"
        onChange={inputAddHandler}
        value={newTodo}
      />
    </Wrapper>
  );
}
