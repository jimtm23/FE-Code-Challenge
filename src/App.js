import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import DoubleOutput from './component/DoubleOutput';

function App() {

  return (
    <Container>
      <div className="box" style={{minHeight:"600px"}}>
        <div className="content">
          <div className="center-text">
            <h3>Medirecords Front end Code Challenge</h3>
            <h5>Please try to implement following within one hour</h5>
          </div>
          <br/>
          <DoubleOutput></DoubleOutput>
        </div>
      </div>
    </Container>
  );
}

export default App;
