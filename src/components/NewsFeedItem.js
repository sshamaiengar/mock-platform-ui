import './NewsFeedItem.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Heart, Chat, PersonCircle } from 'react-bootstrap-icons';

const NewsFeedItem = (props) => (
    <Card className="NewsFeedItem my-5">
        <Card.Body>
            <Row>
                <Col xs="auto">
                    <PersonCircle size={36}></PersonCircle>
                </Col>
                <Col>
                    <Card.Title>{props.author.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.date.toLocaleString()}</Card.Subtitle>
                </Col>
            </Row>
            
            <Card.Text>
                {props.text}
            </Card.Text>
            <Row>
                <Col className="text-center">
                    <Button variant="primary" className="mx-5"><Heart></Heart></Button>
                </Col>
                <Col className="text-center">
                    <Button variant="light" className="mx-5"><Chat></Chat></Button>
                </Col>
            </Row>
        </Card.Body>
    </Card>
)

export default NewsFeedItem;