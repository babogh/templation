import React from 'react';

const Canvas = ({ width, height }) => {
    const canvasStyle = {
        border: "1px solid black",
        backgroundColor: "white"
    };

    return (
        <canvas
            width={width}
            height={height}
            style={canvasStyle}
        />
    );
}

export default Canvas;
