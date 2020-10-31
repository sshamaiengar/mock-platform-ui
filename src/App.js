import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NewsFeed from './components/NewsFeed';
import DataFeed from './components/DataFeed';

function App() {
  return (
    <Container fluid className="p-3 App h-100">
      <Row className="h-100">
        <Col md={6} lg={7} xl={8}>
          <NewsFeed></NewsFeed>
        </Col>
        <Col>
          <DataFeed></DataFeed>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
