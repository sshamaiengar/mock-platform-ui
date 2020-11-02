import { Component } from 'react';
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
        date: new Date("2020-10-31T03:24:00"),
        liked: true
    },
    {
        author: {name: "ACME Corporation"},
        text: "Buy our products so we can make $$$! Limited time special offer: buy 10 things and get the 11th free!",
        date: new Date("2020-10-30T03:24:00"),
        liked: false
    },
    {
        author: {name: "Bob Smith"},
        text: "Fusce imperdiet est id sapien gravida molestie vel quis turpis. Phasellus eget elementum risus. Cras luctus, metus ut porttitor convallis, ligula lacus ullamcorper mauris, in placerat ipsum ligula non leo. Proin iaculis est lectus. Fusce ullamcorper urna eget congue euismod. Mauris condimentum vel urna ac iaculis. Nam consectetur vitae tortor ac ultricies. Fusce semper nulla ut urna dignissim, ut tincidunt lorem egestas. Vestibulum suscipit auctor eleifend.",
        date: new Date("2020-10-29T10:00:00"),
        liked: false
    }
]


class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = { items: items };
    }

    onLikeItem(i) {
        this.setState(this.state.items.map((item, j) => {
            if (i === j) {
                item.liked = !item.liked;
            }
            console.log(item);
            return item;
        }))
    }

    render() {
        return (
            <Container className="NewsFeed">
                <h1>fakebook</h1>
                <Row className="justify-content-md-center">
                    <Col lg={9}>
                        {this.state.items.map((item, i) => (
                            <NewsFeedItem
                                key={`${item.author.name}_${item.date}`}
                                author={item.author}
                                text={item.text}
                                date={item.date}
                                liked={item.liked}
                                onLike={() => this.onLikeItem(i)}
                            />
                        ))}
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default NewsFeed;