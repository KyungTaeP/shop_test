// public의 index.html에 링크로 추가하던, 여기다 import로 불러오던 둘 중 하나로 사용해야함
// import 'bootstrap/dist/css/bootstrap.min.css';
// 대문자로 시작하는건 컴포넌트라고 생각하기
// 컴포넌트에 해당하는 부분들을 다 선언해 줘야 오류가 발생하지 않음
import { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

// 상대경로
// import logo from './img/test1.jpg';
import "./App.css";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);

  return (
    <>
      {/* <Button variant="primary">Primary</Button>{" "} */}
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <div className="headimg">
        <img src={`${process.env.PUBLIC_URL}/img/test1.jpg`} />
      </div>

      {/* productList는 map함수를 사용해서 출력(내용들이 반복됨) */}
      <div className="productList">
        {
          shoes.map((a,i)=>{
            return(
              // i값을 props로 Card로 보내줘야 이미지가 다른 사진들이 업로드됨
            <Card shoes={shoes[i]} i={i} key={i} />
            )
          })
        }
      </div>
    </>
  );
}

// shoes는 App에서 설정됨 (Card와는 형제관계)
// 따라서 App에서 전송해줘야함
function Card(props) {
  return (
    <div className="list">
      {/* props는 0부터 시작하기 때문에 props.i + 1을 함 */}
      <img src={`${process.env.PUBLIC_URL}/img/product0${props.i + 1}.jpg`} />
      <p>{props.shoes.title}</p>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
