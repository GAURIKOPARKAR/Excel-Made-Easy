import React from 'react';

const About = () => {
  const para1 = `Excel Made Easy is your trusted partner with over 7 years of expertise and a proven track record of satisfying over 40 clients. We specialize in simplifying Excel complexities and providing customized solutions to enhance your business efficiency and productivity. Whether you are a beginner or an advanced user, we are here to make Excel work for you.`;

  const para2 = `Our mission at Excel Made Easy is to demystify Excel and turn it into a powerful tool for your success. From dynamic spreadsheets to automated workflows, our comprehensive solutions cater to your unique needs, helping you make informed decisions and achieve your business objectives confidently. Contact Excel Made Easy today to unlock the full potential of Excel and propel your business forward.`;

  return (
    <div className="xl:flex sm:flex-col justify-center items-center m-8">
      <img className="h-48 w-48 rounded-full border-4 border-gray-200 mr-8" src={"./public/Images/ash.jpeg"} alt="Ashok" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-blue-500 text-2xl font-bold mb-4">Name: Ashok Koparkar</div>
        <div className="text-gray-700 mb-4">{para1}</div>
        <div className="text-gray-700">{para2}</div>
      </div>
    </div>
  );
};

export default About;
