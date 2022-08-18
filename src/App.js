// public의 index.html에 링크로 추가하던, 여기다 import로 불러오던 둘 중 하나로 사용해야함
// import 'bootstrap/dist/css/bootstrap.min.css';
// 대문자로 시작하는건 컴포넌트라고 생각하기
// 컴포넌트에 해당하는 부분들을 다 선언해 줘야 오류가 발생하지 않음
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

// 상대경로
// import logo from './img/test1.jpg';
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";

// pages 컴포넌트들 받아옴
import About from "./pages/About.js";
import Detail from "./pages/Detail.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <>
      {/* <Button variant="primary">Primary</Button>{" "} */}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">로고</Navbar.Brand>
          <Nav className= "me-auto">
            <Nav.Link href="/detail">상세페이지</Nav.Link>
            <Nav.Link href="/about">회사소개</Nav.Link>
            <Nav.Link onClick={()=>{
              navigate("about/ceo");
            }}>조직도</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="headimg">
        <img src={`${process.env.PUBLIC_URL}/img/test1.jpg`} />
      </div>

      {/* Route는 원하는 페이지를 보여줌 */}
      {/* 모든 Route는 Routes안에 존재해야함 */}
      <Routes>
        {/* 단일 컴포넌트 일 시 아래처럼 사용 */}
        {/* path : URL 정보라고 생각하면 편함 */}
        {/* path를 불러오면 element를 보여달라 */}
        {/* Route를 묶는기능 : Nested Routing(중첩 라우팅) */}
        <Route
          path="/"
          element={
            <div className="productList">
              {shoes.map((a, i) => {
                return (
                  <div key={i} onClick={()=>{navigate('./detail/'+i)}}>
                  <Card shoes={shoes[i]} i={i} />
                  </div>
                );
              })}
            </div>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="ceo" element={<>회장님 인사말</>} />
        </Route>
        <Route path="*" element={<>404page</>} />
      </Routes>

      {/* productList는 map함수를 사용해서 출력(내용들이 반복됨) */}
    </>
  );
}




// shoes는 App에서 설정됨 (Card와는 형제관계)
// 따라서 App에서 전송해줘야함
function Card(props) {
  return (
    <div className="list">
      {/* props는 0부터 시작하기 때문에 props.i + 1을 함 */}
      <img  src={`${process.env.PUBLIC_URL}/img/product0${props.i + 1}.jpg`} />
      <p>{props.shoes.title}</p>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
