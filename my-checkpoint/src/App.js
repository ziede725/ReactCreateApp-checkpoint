import logo from "./logo.svg";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, FormControl, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
let user = { name: "John" };
function getName() {
 return user.name;
}
function App() {
 return (
   <div>
     <p>{getName}</p>
   </div>
 );
}


export default App;
