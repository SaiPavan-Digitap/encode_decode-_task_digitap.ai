import React, { useState } from 'react';

const Decode = () => {
    const [encodedText, setEncodedText] = useState('');
    const [decodedText, setDecodedText] = useState('');

    const decodeText = () => {
        try {
            setDecodedText(decodeURIComponent(escape(atob(encodedText))));
        } catch (error) {
            alert('Invalid Base64 text.');
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(decodedText).then(() => alert('Copied to clipboard!'));
    };

    return (
        <div className="decode-section-container">
            <input
                type="text"
                placeholder="Enter Base64 text to decode"
                className="textbox-container"
                value={encodedText}
                onChange={(e) => setEncodedText(e.target.value)}
            />
            <button className="decode_text" onClick={decodeText}>
                Decode Text
            </button>
            <div className="result-container">
                <textarea
                    pla ceholder="Decoded text"
                    readOnly
                    value={decodedText}
                />
                <button className="copy-btn" onClick={copyToClipboard}>
                    Copy
                </button>
            </div>
        </div>
    );
};

export default Decode;
