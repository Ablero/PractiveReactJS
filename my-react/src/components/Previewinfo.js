import React from 'react';

const Previewinfo = ({ rows }) => {
    return (
        <div>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th style={{ color: 'blue', textAlign: 'left' }}>Level</th> {/* Applying blue color and left-align */}
                        <th style={{ textAlign: 'center' }}>Time</th>
                        <th style={{ textAlign: 'right' }}>Blinds</th>
                    </tr>
                </thead>
                <tbody>
                    {rows && rows.length > 0 ? (
                        rows.map((row, index) => (
                            <tr key={index}>
                                <td style={{ color: 'blue', textAlign: 'left' }}>{row.levels}</td> {/* Applying blue color and left-align */}
                                <td style={{ textAlign: 'center' }}>{row.time}</td>
                                <td style={{ textAlign: 'right' }}>{row.blinds}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Previewinfo;
