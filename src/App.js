import './App.css';

import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NewsFeed from './components/NewsFeed';
import DataFeed from './components/DataFeed';
import useDataCollector from './hooks/DataCollector';

function App() {
  const collector = useDataCollector();

  useEffect(() => {
	collector.collectMetric({
	  text: `App loaded from browser version ${navigator.appVersion} on platform ${navigator.platform} in language ${navigator.language}`,
	  date: new Date()
	});

    navigator.geolocation.getCurrentPosition((pos) => {
        const { accuracy, latitude, longitude } = pos.coords;
        collector.collectMetric({
            text: `User geolocated to latitude ${latitude.toFixed(4)} and longitude ${longitude.toFixed(4)} with an accuracy of ${accuracy} meters`,
            date: new Date()
        });
    });
  }, [])

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
