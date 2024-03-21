import styled from "styled-components";
import TodoFisrst from "./TodoFirst";
import TodoList from "./TodoList";

const Wrapper = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const TodoLists = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;

const TodoBottom = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TodoSuccess = styled.div`
  font-weight: bolder;
`;

const TodoBtns = styled.div`
  button:first-child {
    margin-right: 10px;
  }
`;

const TodoBtn = styled.button`
  border: 0;
  border-radius: 4px;
  background-color: rgb(108, 117, 125);
  padding: 7px;
  color: white;
`;

export default function TodoContents({ group, setGroup }) {
  const completeCheck = group.filter((value) => value.check === true).length;

  const allClear = () => {
    setGroup([]);
  };

  const onSelDelHandle = () => {
    setGroup((prev) => prev.filter((value) => !value.check));
  };

  return (
    <Wrapper>
      <TodoFisrst setGroup={setGroup} content="List" />
      <TodoLists>
        {group.map((todoObj) => (
          <TodoList setGroup={setGroup} todoObj={todoObj} />
        ))}
      </TodoLists>
      <TodoBottom>
        <TodoSuccess>
          <h3>Completed Todos : {completeCheck}</h3>
        </TodoSuccess>
        <TodoBtns>
          <TodoBtn onClick={onSelDelHandle}>Delete selected</TodoBtn>
          <TodoBtn onClick={allClear}>Clear all</TodoBtn>
        </TodoBtns>
      </TodoBottom>
    </Wrapper>
  );
}
