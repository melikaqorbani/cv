import React from 'react';
import profilePic from '../assets/profile.png'; // Ensure this path is correct
import SplitImageComponent from './SplitImageComponent';


function Profile() {
  return (
    <div>
    <div className="flex max-sm:flex-col mb-6 sm:h-screen min-sm:h-auto md:mb-16">
      <div className='md:w-8/12 md:flex flex-wrap content-center relative'>
        <div className="lg:m-32 md:m-6 max-md:m-6 max-sm:m-6 ">
          <div className="text-right max-w-3xl mx-auto md:space-y-6 max-sm:space-y-4 max-sm:mt-14">
            <p className="max-md:text-xl text-4xl">پـــرتـفـولـیـو</p>
            <h1 className="text-5xl max-md:text-2xl font-bold text-red">
              روژان شــــهـبـازنژاد
            </h1>
            <div className="md:w-80 sm:w-40 max-sm:w-40 border border-red-700 my-4"></div>
            <p className="text-3xl md:text-5xl md:leading-normal tex-justify">
            طـراح رابـط کــاربـری و تــجـربـه کــاربـری
            </p>
            <div>
            <p className="text-lg text-gray-700 leading-relaxed tracking-wide font-light max-md:text-justify  md:w-9/12 md:leading-9 ">
            باید ی توضیح مختصر دو خطی بنویسیم که با فیگما مسطلیم به انواع طزاحی ریسگانسیو و مایل به همکاری ریموت و حضوری باس سوال بپرسم که دوتاش کنار هم بار منفی نداره ایا تجربه کارم بزن یک سالو نیم
            </p>
            </div>
            <button className="back-red text-white py-2 px-6 border-2 border-black text-xl">نمونه کار ها</button>
          </div>
        </div>
        <div className="flex justify-center absolute bottom-0 left-0 right-0 max-sm:hidden">
            <svg width="148" height="28" viewBox="0 0 148 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M122.368 21.385C122.368 21.805 122.462 22.2367 122.66 22.6567C122.858 23.0767 123.115 23.4733 123.453 23.8467C124.025 24.4767 124.655 24.9317 125.367 25.2233C126.067 25.515 126.825 25.6667 127.642 25.6667C128.832 25.6667 130.103 25.3867 131.445 24.815C132.787 24.2433 134.128 23.4733 135.458 22.505C136.8 21.525 138.072 20.44 139.285 19.2383C140.487 18.025 141.572 16.7533 142.54 15.4233C143.497 14.0933 144.267 12.7633 144.827 11.445C145.387 10.115 145.667 8.84334 145.667 7.63001C145.667 6.83668 145.527 6.07834 145.247 5.37834C144.967 4.66668 144.523 4.01334 143.905 3.43001C143.158 2.69501 142.342 2.33334 141.478 2.33334C141.152 2.33334 140.825 2.40334 140.533 2.54334C140.23 2.68334 139.962 2.89334 139.752 3.19668L137.045 7.01168C136.835 7.30334 136.683 7.57168 136.578 7.82834C136.473 8.07334 136.415 8.31834 136.415 8.54001C136.415 8.82001 136.497 9.10001 136.66 9.36834C136.812 9.63668 137.033 9.91668 137.313 10.1967L138.2 11.1183C138.328 11.2467 138.387 11.3983 138.387 11.585C138.387 11.6783 138.375 11.76 138.352 11.8533C138.317 11.9467 138.282 12.0167 138.258 12.0867C138.048 12.4717 137.687 12.9733 137.173 13.58C136.648 14.1867 136.088 14.805 135.482 15.4233C134.852 16.0417 134.245 16.6133 133.627 17.1383C133.02 17.6517 132.518 18.0017 132.122 18.2117C132.063 18.235 131.993 18.27 131.912 18.305C131.818 18.34 131.725 18.3517 131.62 18.3517C131.422 18.3517 131.27 18.2817 131.142 18.1533L130.255 17.2783C129.963 16.9867 129.683 16.765 129.415 16.625C129.147 16.4617 128.878 16.38 128.587 16.38C128.365 16.38 128.132 16.4267 127.875 16.5317C127.618 16.6367 127.35 16.7883 127.058 16.9867L123.197 19.7283C122.893 19.9383 122.683 20.1833 122.555 20.475C122.438 20.7667 122.368 21.0583 122.368 21.385Z" stroke="#C13720" strokeWidth="2" strokeMiterlimit="10" />
              <path d="M79.8333 23.9167H68.1666C64.6666 23.9167 62.3333 22.1667 62.3333 18.0833V9.91668C62.3333 5.83334 64.6666 4.08334 68.1666 4.08334H79.8333C83.3333 4.08334 85.6666 5.83334 85.6666 9.91668V18.0833C85.6666 22.1667 83.3333 23.9167 79.8333 23.9167Z" stroke="#C13720" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M79.8334 10.5L76.1817 13.4167C74.98 14.3733 73.0083 14.3733 71.8067 13.4167L68.1667 10.5" stroke="#C13720" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 15.6683C16.0103 15.6683 17.64 14.0387 17.64 12.0283C17.64 10.018 16.0103 8.38834 14 8.38834C11.9897 8.38834 10.36 10.018 10.36 12.0283C10.36 14.0387 11.9897 15.6683 14 15.6683Z" stroke="#C13720" strokeWidth="2" />
              <path d="M4.22334 9.90501C6.52167 -0.19832 21.49 -0.186653 23.7767 9.91668C25.1183 15.8433 21.4317 20.86 18.2 23.9633C15.855 26.2267 12.145 26.2267 9.78834 23.9633C6.56834 20.86 2.88167 15.8317 4.22334 9.90501Z" stroke="#C13720" strokeWidth="2" />
            </svg>
        </div>
      </div>
      
      <div className="w-4/12 max-sm:hidden h-full">
        <img src={profilePic} alt="Profile" className="w-full h-full object-cover border-2 border-r-black border-b-black" />
      </div>
      
    </div>
    <div className="hidden max-sm:block">
    <SplitImageComponent />
  </div>
  </div>
  );
}

export default Profile;
