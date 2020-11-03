import Container from 'react-bootstrap/Container';
import DataFeedItem from './DataFeedItem';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import './DataFeed.css'

const DataFeed = (props) => {
    const items = props.getAllMetrics()
        .map((metric, i) => (
            <CSSTransition key={i} timeout={250} classNames="move">
                <DataFeedItem 
                    {...metric}
                    key={`${i}_${metric.date.toISOString()}`} />
            </CSSTransition>
        ));
        
    // reverse items when presented so that the new items are animated and shown at the top
    return (
        <Container fluid className="DataFeed sticky-top p-3">
            <h3>Data Feed</h3>
            <TransitionGroup className="items-section__list"> 
                { items.slice().reverse() }
            </TransitionGroup>
        </Container>
    );
};

export default DataFeed;
