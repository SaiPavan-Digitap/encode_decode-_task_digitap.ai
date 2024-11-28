import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('encode'); // default active tab
  const [encodedText, setEncodedText] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const [base64Image, setBase64Image] = useState('');
  const [decodedImage, setDecodedImage] = useState(null);
  const [textInput, setTextInput] = useState('');
  const [base64Input, setBase64Input] = useState('');
  const [imageFile, setImageFile] = useState(null);

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Handle text encoding
  const handleEncode = () => {
    const base64Text = btoa(unescape(encodeURIComponent(textInput)));
    setEncodedText(base64Text);
  };

  // Handle text decoding
  const handleDecode = () => {
    try {
      const decodedText = decodeURIComponent(escape(atob(base64Input)));
      setDecodedText(decodedText);
    } catch (error) {
      alert('Invalid Base64 text.');
    }
  };

  // Handle image encoding
  const handleImageEncode = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBase64Image(reader.result.split(',')[1]);
    };
    if (imageFile) reader.readAsDataURL(imageFile);
  };

  // Handle image decoding
  const handleImageDecode = () => {
    setDecodedImage(`data:image/jpeg;base64,${base64Image}`);
  };

  return (
    <div className="main_div">
      <ul data-tabs>
        <li>
          <a
            href="#encode"
            className={activeTab === 'encode' ? 'active' : ''}
            onClick={() => handleTabClick('encode')}
          >
            Encode
          </a>
        </li>
        <li>
          <a
            href="#decode"
            className={activeTab === 'decode' ? 'active' : ''}
            onClick={() => handleTabClick('decode')}
          >
            Decode
          </a>
        </li>
        <li>
          <a
            href="#encodeImage"
            className={activeTab === 'encodeImage' ? 'active' : ''}
            onClick={() => handleTabClick('encodeImage')}
          >
            Encode Image
          </a>
        </li>
        <li>
          <a
            href="#decodeImage"
            className={activeTab === 'decodeImage' ? 'active' : ''}
            onClick={() => handleTabClick('decodeImage')}
          >
            Decode Image
          </a>
        </li>
      </ul>

      <div
        id="encode"
        className={`tab-content ${activeTab === 'encode' ? 'active' : ''}`}
      >
        <div className="encode-section-container">
          <input
            type="text"
            placeholder="Enter text to encode"
            className="textbox-container"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          />
          <button className="encode_text" onClick={handleEncode}>
            Encode
          </button>
          <div className="result-container">
            <textarea
              placeholder="Encoded text"
              readOnly
              value={encodedText}
            />
            <button
              className="copy-btn"
              onClick={() => navigator.clipboard.writeText(encodedText)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div
        id="decode"
        className={`tab-content ${activeTab === 'decode' ? 'active' : ''}`}
      >
        <div className="decode-section-container">
          <input
            type="text"
            placeholder="Enter base64 text to decode"
            className="textbox-container"
            value={base64Input}
            onChange={(e) => setBase64Input(e.target.value)}
          />
          <button className="decode_text" onClick={handleDecode}>
            Decode
          </button>
          <div className="result-container">
            <textarea
              placeholder="Decoded text"
              readOnly
              value={decodedText}
            />
            <button
              className="copy-btn"
              onClick={() => navigator.clipboard.writeText(decodedText)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div
        id="encodeImage"
        className={`tab-content ${activeTab === 'encodeImage' ? 'active' : ''}`}
      >
        <div className="encode-image-section-container">
          <input
            type="file"
            accept="image/*"
            className="image-file-input"
            onChange={(e) => setImageFile(e.target.files[0])}
          />
          <button className="encode_image_button" onClick={handleImageEncode}>
            Encode Image
          </button>
          <div className="result-container">
            <textarea
              placeholder="Encoded Image Data (Base64)"
              readOnly
              value={base64Image}
            />
            <button
              className="copy-btn"
              onClick={() => navigator.clipboard.writeText(base64Image)}
            >
              Copy
            </button>
          </div>
        </div>
      </div>
//  git config --global user.name "SaiPavan-Digitap"
      <div
        id="decodeImage"
        className={`tab-content ${activeTab === 'decodeImage' ? 'active' : ''}`}
      >
        <div className="decode-image-section-container">
          <textarea
            className="textboxdecodeimage-container"
            placeholder="Enter base64 encoded image"
            value={base64Image}
            onChange={(e) => setBase64Image(e.target.value)}
          />
          <button className="decode_image_button" onClick={handleImageDecode}>
            Decode Image
          </button>
          <div className="result-container">
            {decodedImage && <img src={decodedImage} alt="Decoded" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
