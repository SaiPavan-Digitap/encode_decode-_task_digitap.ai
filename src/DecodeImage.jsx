import React, { useState } from 'react';

const DecodeImage = () => {
    const [base64, setBase64] = useState('');

    return (
        <div className="decode-image-section-container">
            <textarea
                placeholder="Enter Base64 image data"
                className="textboxdecodeimage-container"
                value={base64}
                onChange={(e) => setBase64(e.target.value)}
            />
            <div className="result-container">
                {base64 && <img src={`data:image/jpeg;base64,${base64}`} alt="Decoded" />}
            </div>
        </div>
    );
};

export default DecodeImage;
