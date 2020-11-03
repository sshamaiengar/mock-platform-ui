import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './DataFeedItem.css'

const DataFeedItem = (props) => (
	<Card border="light" className="DataFeedItem text-body my-5">
        <Card.Body>
            <Card.Text>
                {props.text}
            </Card.Text>
            <Row>
                <Col className="text-muted">
                    {props.date.toLocaleString()}
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

export default DataFeedItem;
