import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'encode', label: 'Encode' },
        { id: 'decode', label: 'Decode' },
        { id: 'encodeImage', label: 'Encode Image' },
        { id: 'decodeImage', label: 'Decode Image' },
    ];

    return (
        <ul data-tabs>
            {tabs.map((tab) => (
                <li key={tab.id}>
                    <a
                        href={`#${tab.id}`}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab(tab.id);
                        }}
                    >
                        {tab.label}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Tabs;
