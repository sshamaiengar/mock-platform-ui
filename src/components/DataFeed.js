import Container from 'react-bootstrap/Container';
import DataFeedItem from './DataFeedItem';
import './DataFeed.css'

const DataFeed = (props) => {
    const items = props.getAllMetrics().map(metric => (
        <DataFeedItem 
            {...metric} 
            key={`${metric.date.toISOString()}`} />
    ));

    return (
        <Container fluid className="DataFeed sticky-top p-3">
            <h3>Data Feed</h3>
            { items }
        </Container>
    );
};

export default DataFeed;
