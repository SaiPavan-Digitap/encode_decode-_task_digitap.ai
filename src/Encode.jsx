import React, { useState } from 'react';

const Encode = () => {
  const [text, setText] = useState('');
  const [encodedText, setEncodedText] = useState('');

  const encodeText = () => {
    if (text.trim()) {
      setEncodedText(btoa(unescape(encodeURIComponent(text))));
    } else {
      alert('Please enter text to encode.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encodedText).then(() => alert('Copied to clipboard!'));
  };

  return (
    <div className="encode-section-container">
      <input
        type="text"
        placeholder="Enter text to encode"
        className="textbox-container"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="encode_text" onClick={encodeText}>
        Encode
      </button>
      <div className="result-container">
        <textarea
          placeholder="Encoded text"
          readOnly
          value={encodedText}
        />
        <button className="copy-btn" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
    </div>
  );
};

export default Encode;
