import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  background-color: black;
  display: flex;
  justify-content: center;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

const Wrapper = styled.div`
  background-color: white;
  width: 70vw;
  height: 80vh;
  margin-top: 45px;
  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bolder;
`;

const InputForm = styled.form`
  position: relative;
  svg {
    width: 20px;
    height: 20px;
    color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 35%;
    left: 6px;
  }
`;

const TodoInput = styled.input`
  width: 100%;
  height: 7vh;
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  padding-left: 30px;
`;

const TodoContents = styled.div`
  margin: 10px 0;
`;

const TodoTitle = styled.h1`
  font-weight: 600;
`;

const TodoLists = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.3);
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
`;

const TodoList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0;

  svg{
    width: 30px;
  }
`;

const TodoFirst = styled.div`
display: flex;
justify-content: center;
align-items: center;
input{
  margin-right: 20px;
}
h2{
  margin-top: 4px;
}
`

const TodoBottom = styled.div`
height: 10vh;
display: flex;
align-items: center;
justify-content: space-between;
`

const TodoSuccess = styled.div`
  font-weight: bolder;
`

const TodoBtns = styled.div`
button:first-child{
  margin-right: 10px;
}
`

const TodoBtn = styled.button`
border: 0;
border-radius: 4px;
background-color: rgb(108,117,125);
padding: 7px;
color: white;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <Title>ToDo List App</Title>
        </Header>
        <InputForm>
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

          <TodoInput type="text" placeholder="Please enter your ToDo List" />
        </InputForm>
        <TodoContents>
          <TodoTitle>
            List
          </TodoTitle>
          <TodoLists>
            <TodoList>
              <TodoFirst>
              <input type="checkbox" name="" id="" />
              <h2>Exercise</h2>
              </TodoFirst>
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </TodoList>
            <TodoList>
              <TodoFirst>
              <input type="checkbox" name="" id="" />
              <h2>Study</h2>
              </TodoFirst>
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </TodoList>
            <TodoList>
              <TodoFirst>
              <input type="checkbox" name="" id="" />
              <h2>Shopping</h2>
              </TodoFirst>
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
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </TodoList>
          </TodoLists>
          <TodoBottom>
            <TodoSuccess><h3>Completed Todos : 3</h3></TodoSuccess>
            <TodoBtns>
              <TodoBtn>
                Delete selected
              </TodoBtn>
              <TodoBtn>
                Clear all
              </TodoBtn>
            </TodoBtns>
          </TodoBottom>
        </TodoContents>
      </Wrapper>
    </>
  );
}

export default App;