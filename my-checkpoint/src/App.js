import logo from "./logo.svg";
import "./App.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, FormControl, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.hello
              </Form.Text>
            </Form.Group>
            </Col>
            
            <Col >
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
