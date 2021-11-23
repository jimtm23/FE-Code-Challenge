import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import DoubleOutput from './component/DoubleOutput';

function App() {

  return (
    <Container>
      <div className="box" style={{minHeight:"700px"}}>
        <div className="content">
          <div className="center-text">
            <h2>Medirecords Front end Code Challenge</h2>
            <h4>Please try to implement following within one hour</h4>
          </div>
          <br/>
          <DoubleOutput></DoubleOutput>
        </div>
      </div>
    </Container>
  );
}

export default App;
