import React from 'react';
import profilePic from '../assets/profile.png'; // Make sure to add your profile picture in the assets folder

const About = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full p-6">
      <div className="text-2xl font-bold mb-4">درباره‌ی من</div>
      <p className="text-sm text-gray-700">
        ویژگی های فردی و روحیه‌ی تیم ورک طراحی ری‌اکت و مایل به همکاری ...
      </p>
      <img src={profilePic} alt="Profile" className="rounded-full w-32 h-32 mt-4 mx-auto md:mx-0" />
    </div>
  );
};

export default About;
