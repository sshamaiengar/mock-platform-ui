import logo from './logo.svg';
// import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React Bootstrap</h1>
      </Jumbotron>
    </Container>
  );
}

export default App;
