import React from 'react';

const AboutMeCard = ({ imageSrc, name, birthDate, location, education, experience, description }) => {
    return (
        <div className="background-overlay h-full border border-black p-6 w-9/12 my-6">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <img src={imageSrc} alt="Profile" className="rounded-full w-32 h-32 mb-4 md:mb-0" />
                </div>
                <div className="w-full md:w-2/3 md:pl-6 text-center md:text-right">
                    <h2 className="text-2xl font-bold mb-2">{name}</h2>
                    <p className="text-sm text-gray-500 mb-4">{description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-red-700 font-semibold mb-1">متولد</h3>
                            <p>{birthDate}</p>
                        </div>
                        <div>
                            
                            <h3 className="text-red-700 font-semibold mb-1">ساکن</h3>
                            <p>{location}</p>
                        </div>
                        <div>
                            <h3 className="text-red-700 font-semibold mb-1">تحصیلات</h3>
                            <p>{education}</p>
                        </div>
                        <div>
                            <h3 className="text-red-700 font-semibold mb-1">سابقه کار</h3>
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
        </div>
    );
};

const AboutMeSection = () => {
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

    return <AboutMeCard {...data} />;
};

export default AboutMeSection;
