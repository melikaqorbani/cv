import React from 'react';
import imageUrl from './profile.png'; // مسیر تصویر محلی
const SplitImageComponent = () => {
  return (
    <div className='flex mx-6'>
    <div className="w-1/2 flex ml-5">
      <div className="w-full  border border-black">
        <div
          className="w-full h-96 "
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'right',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      <div className="w-full border  border-black mr-5">
        <div
          className="w-full h-96 "
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'left',
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
    <div className="w-1/2 flex">
    <div className="w-full border border-black">
      <div
        className="w-full h-96 "
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'right',
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
    <div className="w-full border border-black mr-5">
      <div
        className="w-full h-96 "
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'left',
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  </div>
  </div>
  );
};

export default SplitImageComponent;
