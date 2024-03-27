import React from 'react'

const About = () => {
  const para1 = ` Excel Made Easy is your trusted partner with over 7 years of expertise and a proven track record of satisfying over 40 clients. 
  We specialize in simplifying Excel complexities and providing customized solutions to enhance your business efficiency and productivity.
  Whether you are a beginner or an advanced user, we are here to make Excel work for you.`

  const para2 =`  Our mission at Excel Made Easy is to demystify Excel and turn it into a powerful tool for your success.
  From dynamic spreadsheets to automated workflows, our comprehensive solutions cater to your unique needs,
  helping you make informed decisions and achieve your business objectives confidently.
  Contact Excel Made Easy today to unlock the full potential of Excel and propel your business forward.`
  return (
    <>
    <div className="overflow-y-auto sm:flex-col xl:flex justify-start items-center m-8">
      <img className="h-48 w-48 bg-cover bg-center border-4 border-gray-200 rounded-full" src={"./public/Images/ash.jpeg"} alt="Ashok" />
       
       <div className='bg-white inline block flex-col items-start'>
       <div className='m-4 text-blue-500 text-[2rem]'>Name: Ashok Koparkar</div>
        <div className='text-[1rem] m-4'>{para1}</div>
        <div className='text-[1rem] m-4'>{para2}</div>
        </div>
    </div>
  </>
  
  )
}

export default About