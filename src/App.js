import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NewsFeed from './components/NewsFeed';
import DataFeed from './components/DataFeed';
import useDataCollector from './hooks/DataCollector';

function App() {
  const collector = useDataCollector();

  return (
    <Container fluid className="App p-3 h-100">
      <Row className="h-100" >
        <Col md={6} lg={7} xl={8}>
          <NewsFeed {...collector}></NewsFeed>
        </Col>
        <Col md={6} lg={5} xl={4}>
          <DataFeed {...collector}></DataFeed>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
