import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  input {
    margin-right: 20px;
  }
  h2 {
    margin-top: 4px;
  }
`;

export default function TodoFisrst({ setGroup, content, id, check }) {
  const onCheckHandle = (e) => {
    if (e.target.value === "all") {
      const checkall = e.target.checked;
      setGroup((prev) =>
        prev.map(({ todo }) => ({ ...todo, check: checkall }))
      );
    } else {
      const todoId = +e.target.value;
      setGroup((prev) => {
        const targetTodoIndex = prev.findIndex((todoObj) => {
          console.log(todoObj);
          return todoObj.id === todoId;
        });
        const newTodo = {
          content: prev[targetTodoIndex].content,
          check: !prev[targetTodoIndex].check,
          id: todoId,
        };
        return [
          ...prev.slice(0, targetTodoIndex),
          newTodo,
          ...prev.slice(targetTodoIndex + 1),
        ];
      });
    }
  };

  return (
    <>
      <Wrapper>
        <input type="checkbox" value="all" onChange={onCheckHandle} />
        <h2>{content}</h2>
      </Wrapper>
    </>
  );
}
