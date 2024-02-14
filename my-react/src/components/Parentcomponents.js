// ParentComponent.js
import React from 'react';
import Previewinfo from './Previewinfo';

const Parentcomponents = () => {
    // Define the rows data
    const rows = [
        { levels: 1, time: '3:00', blinds: '1/2' },
        { levels: 2, time: '3:10', blinds: '2/4' },
        { levels: 3, time: '3:20', blinds: '3/6' },
        // Add more dummy data as needed
    ];

    return (
        <div>
            {/* Pass the rows data to the Previewinfo component */}
            <Previewinfo rows={rows} />
        </div>
    );
};

export default Parentcomponents;
