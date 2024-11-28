import React, { useState } from 'react';

const EncodeImage = () => {
    const [base64, setBase64] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBase64(reader.result.split(',')[1]);
            };
            reader.readAsDataURL(file);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(base64).then(() => alert('Copied to clipboard!'));
    };

    return (
        <div className="encode-image-section-container">
            <input type="file" accept="image/*" className="image-file-input" onChange={handleFileChange} />
            <div className="result-container">
                <textarea placeholder="Encoded Image Data (Base64)" readOnly value={base64} />
                <button className="copy-btn" onClick={copyToClipboard}>
                    Copy
                </button>
            </div>
        </div>
    );
};

export default EncodeImage;
