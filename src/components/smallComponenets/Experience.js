import React from 'react';

const Experience = () => {
  return (
    <div className=''>
      
      <div className=" text-gray-700 flex flex-col items-center">
        <div className='lg: h-32 w-48'>
          <div className='flex items-center mb-4'>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7251 2.95165L4.70172 7.53665C2.45005 9.00665 2.45005 12.2966 4.70172 13.7666L11.7251 18.3516C12.9851 19.18 15.0617 19.18 16.3217 18.3516L23.3101 13.7666C25.5501 12.2966 25.5501 9.01831 23.3101 7.54831L16.3217 2.96331C15.0617 2.12331 12.9851 2.12331 11.7251 2.95165Z" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.5684 15.26L6.55673 20.7317C6.55673 22.2133 7.70007 23.8 9.10007 24.2667L12.8217 25.5033C13.4634 25.7133 14.5251 25.7133 15.1784 25.5033L18.9001 24.2667C20.3001 23.8 21.4434 22.2133 21.4434 20.7317V15.3183" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.9667 17.5V10.5" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="text-xl font-semibold text-red mr-5">تـــــــحـصـیـلات</div>
          </div>
          <div className="text-xl text-gray-700">
            کارشناسی روانشناسی<br />
            دانشگاه خوارزمی
          </div>
        </div>
        <div className='lg:h-32 w-48'>
        <div className='flex items-center mb-4'>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6668 19.7755H7.2451C3.31344 19.7755 2.33344 18.7955 2.33344 14.8638V7.86381C2.33344 3.93215 3.31344 2.95215 7.2451 2.95215H19.5301C23.4618 2.95215 24.4418 3.93215 24.4418 7.86381" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.6667 25.0487V19.7754" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.3334 15.1083H11.6667" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.86334 25.0479H11.6667" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M25.6667 14.9338V21.5955C25.6667 24.3605 24.9783 25.0488 22.2133 25.0488H18.0717C15.3067 25.0488 14.6183 24.3605 14.6183 21.5955V14.9338C14.6183 12.1688 15.3067 11.4805 18.0717 11.4805H22.2133C24.9783 11.4805 25.6667 12.1688 25.6667 14.9338Z" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.1186 21.2913H20.1291" stroke="#C13720" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="text-xl font-semibold mb-2 text-red mr-5">ســــــابـقـه کـــــار</div>
        </div>
        <div className='h-24'>
          <div className="text-xl">فریلنسر</div>
          <div className='text-sm flex justify-between'>
          <div className='text-red'> شروع:</div> <div>دی</div> <div>1401</div>
          </div>
          <div className='flex justify-between'>
          <div className='text-red'>پایان:</div> <div>اردیبهشت</div> <div>۱۴۰۲</div>
          </div>
        </div>
        <div>
          <div className="text-xl">مه‌واران بازار نوین</div>
          <div className='text-sm flex justify-between'>
          <div className='text-red'> شروع:</div> <div>خرداد</div> <div>1401</div>
          </div>
          <div className='flex justify-between'>
          <div className='text-red'>پایان:</div> <div>خرداد</div> <div>۱۴۰۲</div>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Experience;
