import React from 'react';

const ExperienceCard = ({ title, subTitle, items  }) => {
    return (
        <div>
            <div className="background-overlay h-full border border-black">
                <div className='h-20 bg-red-700 content-center text-center'>
                    <p className="text-xl text-white">{title}</p>
                    <p className="text-white text-sm">{subTitle}</p>
                </div>
                    <ul className="space-y-2 p-4">
                        {items.map((item, index) => (
                            <div key={index}>
                                <li className="flex items-center justify-between my-1">
                                    <div className="flex items-center">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#06700A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7.75 12L10.58 14.83L16.25 9.17004" stroke="#06700A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <span className='mr-2'>{item.name}</span>
                                    </div>
                                </li>
                                <li className="flex items-center justify-end my-1">
                                    {item.downloadLink && (
                                      <div  className="text-red text-sm flex items-center">
                                        <a href={item.downloadLink} className='ml-2'>
                                            دانلود
                                            
                                        </a>
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                        <path d="M13.7 7.41602C16.7 7.67435 17.925 9.21602 17.925 12.591V12.6993C17.925 16.4243 16.4333 17.916 12.7083 17.916H7.28332C3.55832 17.916 2.06665 16.4243 2.06665 12.6993V12.591C2.06665 9.24102 3.27498 7.69935 6.22498 7.42435" stroke="#C13720" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 1.66602V12.3993" stroke="#C13720" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12.7917 10.541L10 13.3327L7.20837 10.541" stroke="#C13720" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </div>
                                    )}
                                    {item.downloadLinkCase && (
                                      <div  className="text-red text-sm flex items-center">
                                        <a href={item.downloadLinkCase} className='ml-2'>
                                        دانلود کیس استادی
                                            
                                        </a>
                                        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                        <path d="M13.7 7.41602C16.7 7.67435 17.925 9.21602 17.925 12.591V12.6993C17.925 16.4243 16.4333 17.916 12.7083 17.916H7.28332C3.55832 17.916 2.06665 16.4243 2.06665 12.6993V12.591C2.06665 9.24102 3.27498 7.69935 6.22498 7.42435" stroke="#C13720" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M10 1.66602V12.3993" stroke="#C13720" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M12.7917 10.541L10 13.3327L7.20837 10.541" stroke="#C13720" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </div>
                                    )}
                                    {item.Site && (
                                      <div  className=" text-sm flex items-center">
                                        <a href={item.downloadLink} className='ml-2'>
                                            {item.Site}
                                        </a>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.00001 2.25H6.75001C5.28751 6.63 5.28751 11.37 6.75001 15.75H6.00001" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.25 2.25C12.7125 6.63 12.7125 11.37 11.25 15.75" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.25 12V11.25C6.63 12.7125 11.37 12.7125 15.75 11.25V12" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.25 6.74922C6.63 5.28672 11.37 5.28672 15.75 6.74922" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    )}
                                    
                                </li>
                                <li className="flex items-center justify-end my-1">
                                {item.Site2 && (
                                      <div  className=" text-sm flex items-center">
                                        <a href={item.downloadLink} className='ml-2'>
                                            {item.Site2}
                                        </a>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.00001 2.25H6.75001C5.28751 6.63 5.28751 11.37 6.75001 15.75H6.00001" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11.25 2.25C12.7125 6.63 12.7125 11.37 11.25 15.75" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.25 12V11.25C6.63 12.7125 11.37 12.7125 15.75 11.25V12" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.25 6.74922C6.63 5.28672 11.37 5.28672 15.75 6.74922" stroke="#26A4FF" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    )}
                                </li>
                                <div className='border w-full border-slate-200'></div>
                            </div>
                        ))}
                    </ul>
            </div>
        </div>
    );
};

const ExperienceSection = () => {
    const data = [
        {
            title: 'وام اکس',
            subTitle: 'فروش بلیت تاتر، کنسرت و نمایش',
            items: [
                { name: 'فروش بلیت تاتر، کنسرت و نمایش', downloadLink: '#' },
                { name: 'طراحی داشبورد مشتری', downloadLink: '#' },
                { name: 'طراحی صفحه خانه', downloadLink: '#' }
            ],
        },
        {
            title: 'شرکت هیتوازن بازار نوین',
            subTitle: 'فروش اقساطی کالای دیجیتال، طلا و ...',
            items: [
                { name: 'توسعه وبسایت فروش اقساطی کالای دیجیتال', siteLink: '',Site:'ghestore.com' ,siteLink2:'',Site2:'b2b.ghestore.com'  },
                { name: 'طراحی کمپین تبلیغاتی', siteLink: '' ,Site:'ghestore.com/lead12'  },
                { name: 'توسعه وبسایت فروش اقساطی طلا و شمش', siteLink: '' ,Site:'garnetgold.ir' },
                { name: 'طراحی پروژه خدمات HVAC در سراسر تورنتو', siteLink: '' ,Site:'prowiseservices.ca' },
                { name: 'توسعه پروژه فروش دستگاه‌های HVAC در سراسر تورنتو', siteLink: '' ,Site:'hvacnearme.ca' },
                { name: 'طراحی وبسایت لوازم خانگی هیوندای', siteLink: '' ,Site:'hyundaihome.co'  },
                { name: 'طراحی وبسایت فروش کالای دیجیتال (زیماتل)', downloadLink: '#' },
                { name: 'طراحی بنرهای وبسایت ها' },
            ],
        },
        {
            title: 'تندرستی',
            subTitle: 'خدمات پزشکی به بیماران',
            items: [
                { name: 'آنالیز رقابتی' },
                { name: 'کاربر پژوهی' },
                { name: 'ترسیم پرسونا' },
                { name: 'معماری اطلاعات', downloadLinkCase: '#' },
            ],
        }
    ];

    return (
        <div>
            <div className='text-3xl mb-10'>تجربیات:</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((section, index) => (
                    <ExperienceCard
                        key={index}
                        title={section.title}
                        subTitle={section.subTitle}
                        items={section.items}

                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;
