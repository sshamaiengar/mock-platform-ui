import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import NewsFeedItem from './NewsFeedItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './NewsFeed.css';

// static placeholder data
const items = [
    {
        author: {name: "John Doe"},
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed ante ultrices, tempus arcu nec, semper urna. Proin tempus maximus enim nec maximus. Nullam sapien lorem, scelerisque a turpis ac, viverra facilisis urna. Mauris pulvinar sed libero eu tempus. Duis quis porttitor eros. Ut at nunc eu justo fringilla ultricies. Fusce non risus massa. Donec faucibus lectus velit, nec dapibus orci euismod ut. Phasellus non tempor lectus, a iaculis justo. Aliquam erat volutpat.",
        date: Date("2020-10-31T03:24:00")
    },
    {
        author: {name: "ACME Corporation"},
        text: "Buy our products so we can make $$$! Limited time special offer: buy 10 things and get the 11th free!",
        date: Date("2020-10-30T03:24:00")
    }
]


const NewsFeed = () => {
    const [newsFeedItems, setNewsFeedItems] = useState(items);

    return (
        <Container className="NewsFeed">
            <h1>fakebook</h1>
            <Row className="justify-content-md-center">
                <Col lg={9}>
                    {newsFeedItems.map((item, i) => (
                        <NewsFeedItem
                            key={`${item.author.name}_${item.date}`}
                            author={item.author}
                            text={item.text}
                            date={item.date}
                        />
                    ))}
                </Col>
            </Row>
            
        </Container>
)};

export default NewsFeed;