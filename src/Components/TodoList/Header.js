import styled from "styled-components";

const Title = styled.h1`
  font-size: 32px;
  font-weight: bolder;
`;

export default function Header({ title }) {
  return <Title>{title}</Title>;
}
