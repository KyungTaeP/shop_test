import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <h1>회사소개</h1>
      <Outlet></Outlet>
    </>
  );
}

// 하나의 컴포넌트일 경우
export default About;