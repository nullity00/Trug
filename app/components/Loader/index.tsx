import styled from "styled-components";

const Container = styled.div`
  .loader {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader::before {
    content: "";
    background: rgba(255, 255, 255, 0);
    backdrop-filter: blur(8px);
    position: absolute;
    width: 140px;
    height: 55px;
    z-index: 20;
    border-radius: 0 0 10px 10px;
    border: 1px solid rgba(255, 255, 255, 0.274);
    border-top: none;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.082);
    animation: anim2 2s infinite;
  }

  @keyframes anim {
    0%,
    100% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-65px);
    }
  }

  @keyframes anim2 {
    0%,
    100% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(10deg);
    }
  }
`;

const Dots = styled.div<{i: number}>`
  background: rgb(228, 228, 228);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  z-index: -1;
  animation: anim 2s infinite linear;
  animation-delay: calc(-0.3s * ${({i})=> i});
  transform: translateY(5px);
  margin: 0.2em;
`;

export default function Loader() {
  return (
    <Container className="loader">
      <Dots i={1} />
      <Dots i={2} />
      <Dots i={2} />
      <Dots i={2} />
    </Container>
  );
}
