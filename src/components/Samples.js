import React, { useState } from 'react';

const Samples = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6 mt-4">
      <div className="mb-4 flex flex-wrap">
        <button onClick={() => setActiveTab('all')} className={`px-4 py-2 mr-2 mb-2 ${activeTab === 'all' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}>همه</button>
        <button onClick={() => setActiveTab('uiux')} className={`px-4 py-2 mr-2 mb-2 ${activeTab === 'uiux' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}>رابط کاربری (UI)</button>
        <button onClick={() => setActiveTab('graphic')} className={`px-4 py-2 mb-2 ${activeTab === 'graphic' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'}`}>گرافیک</button>
      </div>
      <div>
        {activeTab === 'all' && <div>نمایش همه نمونه کارها</div>}
        {activeTab === 'uiux' && <div>نمایش نمونه کارهای رابط کاربری</div>}
        {activeTab === 'graphic' && <div>نمایش نمونه کارهای گرافیک</div>}
      </div>
    </div>
  );
};

export default Samples;
