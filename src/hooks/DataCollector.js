import { useState } from 'react';

const useDataCollector = () => {
    const [items, setItems] = useState([]);

    const collectMetric = (metric) => {
        setItems(currentItems => currentItems.concat(metric));
    };

    const getAllMetrics = () => {
        return items;
    }

    return {collectMetric, getAllMetrics};
};

export default useDataCollector;
