import React from 'react';
import Head from './smallComponenets/AboutHead';
import profilePic from './about.jpeg';


const About = ({ imageSrc, name, birthDate, location, education, experience, description }) => {
  return (
    <div className='border-black background-overlay border md:w-9/12 mb-70'>
      <div className="flex flex-col items-center py-9">
        <h1 className="text-4xl font-bold ">
          دربــــــــــاره‌ی مـــن
        </h1>
        <div className="h-0.5 bg-black mt-4 w-60"></div>
      </div>
      <div className="lg:flex">
        <div className='lg:w-5/12 flex flex-col items-center mb-12 lg:ml-6'>
          <img src={profilePic} alt="Profile" className="object-cover rounded-full border border-black w-52 h-56 mt-2 mb-6" />
          <p className="text-xl lg:w-9/12 max-lg:w-6/12 max-sm:w-10/12 text-gray-700 leading-relaxed tracking-wide text-justify font-light">
            ویژگی های فردی و روحیه‌ی تیم ورک طزاحی ریسگانسیو و مایل به همکاری ریموت و حضوری باس سوال بپرسم که دوتاش کنار هم بار منفی نداره ایا تجربه کارم بزن یک سالو نیم
          </p>
        </div>
        <div className="grid grid-cols-2 p-10">
          <div className='mb-8'>
            <div className='flex items-center'>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.33331 25.6667H25.6666" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.62836 25.6667V15.1667C3.62836 13.23 5.36669 11.6667 7.51336 11.6667H20.475C22.6217 11.6667 24.36 13.23 24.36 15.1667V25.6667" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.48669 11.6666V8.36498C6.48669 6.96498 7.74669 5.83331 9.31003 5.83331H18.7017C20.2534 5.83331 21.5134 6.96498 21.5134 8.36498V11.6666" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4.11835 16.31L4.55001 16.3217C5.41335 16.3333 6.10168 17.0333 6.10168 17.8967V18.2817C6.10168 19.145 6.80168 19.8567 7.67668 19.8567C8.54001 19.8567 9.25168 19.1567 9.25168 18.2817V17.92C9.25168 17.0567 9.95168 16.345 10.8267 16.345C11.69 16.345 12.4017 17.045 12.4017 17.92V18.2817C12.4017 19.145 13.1017 19.8567 13.9767 19.8567C14.84 19.8567 15.5517 19.1567 15.5517 18.2817V17.92C15.5517 17.0567 16.2517 16.345 17.1267 16.345C17.99 16.345 18.7017 17.045 18.7017 17.92V18.2817C18.7017 19.145 19.4017 19.8567 20.2767 19.8567C21.14 19.8567 21.8517 19.1567 21.8517 18.2817V17.92C21.8517 17.0567 22.5517 16.345 23.4267 16.345H23.9517" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.33331 5.83333V3.5" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.6667 5.83333V3.5" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14 5.83331V2.33331" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h3 className="text-red font-semibold mr-2">متولد</h3>
            </div>
            <p>{birthDate}</p>
          </div>
          <div className='mb-8'>
            <div className='flex items-center'>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 15.6683C16.0104 15.6683 17.64 14.0386 17.64 12.0283C17.64 10.018 16.0104 8.38831 14 8.38831C11.9897 8.38831 10.36 10.018 10.36 12.0283C10.36 14.0386 11.9897 15.6683 14 15.6683Z" stroke="#C13720" stroke-width="1.5" />
                <path d="M4.2234 9.90498C6.52173 -0.198351 21.4901 -0.186684 23.7767 9.91665C25.1184 15.8433 21.4317 20.86 18.2001 23.9633C15.8551 26.2266 12.1451 26.2266 9.7884 23.9633C6.5684 20.86 2.88173 15.8316 4.2234 9.90498Z" stroke="#C13720" stroke-width="1.5" />
              </svg>
              <h3 className="text-red font-semibold mr-2">ساکن</h3>
            </div>
            <p>{location}</p>
          </div>
          <div>
            <div className='flex items-center'>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7251 2.95165L4.70172 7.53665C2.45005 9.00665 2.45005 12.2966 4.70172 13.7666L11.7251 18.3516C12.9851 19.18 15.0617 19.18 16.3217 18.3516L23.3101 13.7666C25.5501 12.2966 25.5501 9.01831 23.3101 7.54831L16.3217 2.96331C15.0617 2.12331 12.9851 2.12331 11.7251 2.95165Z" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.5684 15.26L6.55673 20.7317C6.55673 22.2133 7.70007 23.8 9.10007 24.2667L12.8217 25.5033C13.4634 25.7133 14.5251 25.7133 15.1784 25.5033L18.9001 24.2667C20.3001 23.8 21.4434 22.2133 21.4434 20.7317V15.3183" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M24.9667 17.5V10.5" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <h3 className="text-red font-semibold mr-2">تحصیلات</h3>
            </div>
            <p>{education}</p>
          </div>
          <div>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6668 19.7755H7.2451C3.31344 19.7755 2.33344 18.7955 2.33344 14.8638V7.86381C2.33344 3.93215 3.31344 2.95215 7.2451 2.95215H19.5301C23.4618 2.95215 24.4418 3.93215 24.4418 7.86381" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.6667 25.0487V19.7754" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.3334 15.1083H11.6667" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.86334 25.0479H11.6667" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25.6667 14.9338V21.5955C25.6667 24.3605 24.9783 25.0488 22.2133 25.0488H18.0717C15.3067 25.0488 14.6183 24.3605 14.6183 21.5955V14.9338C14.6183 12.1688 15.3067 11.4805 18.0717 11.4805H22.2133C24.9783 11.4805 25.6667 12.1688 25.6667 14.9338Z" stroke="#C13720" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.1186 21.2913H20.1291" stroke="#C13720" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <h3 className="text-red font-semibold mr-2">سابقه کار</h3>
            <ul className="list-none">
              {experience.map((exp, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span>{exp.title}</span>
                  <span>{exp.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


    </div>
  );
};
const AboutMeCard = () => {
  const data = {
    imageSrc: 'path_to_your_image.jpg',
    name: 'درباره‌ی من',
    birthDate: 'خرداد ۱۳۷۷',
    location: 'تهران، خیابان ویلا (نجات‌الهی)',
    education: 'کارشناسی روانشناسی، دانشگاه خوارزمی',
    experience: [
      { title: 'فریلنسر', period: 'دی ۱۴۰۱ - اردیبهشت ۱۴۰۲' },
      { title: 'مهراوران بازار نوین', period: 'خرداد ۱۴۰۲ - خرداد ۱۴۰۳' },
    ],
    description: 'ویژگی‌های فردی و روحیه‌ی تیم ورک طراحی ریسپانسیو و مایل به همکاری ریموت و حضوری با...'
  };

  return <About {...data} />;
};
export default AboutMeCard;
