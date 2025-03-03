import React from 'react'

const Footer = () => {
  const productList = [ "Market", "ERC20 Token", "Donations" ]
  const contactList = [
    "Support@shake.com",
    "info@shake.com",
    "Contact Us"
  ];
  const useFullLink = ["Home", "About Us", "Company Bio" ];
  return (
    <footer className="text-centre text-white backgroundMain ld:Ttext-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className='mb-4 flex items-center justify-center font-semibold uppercase md:justify-start'>
              Shake
            </h6>
            <p>
              Start by creating a new Next.js project if you don’t have one set up already. 
              The most common approach is to use Create Next App.
            </p>
          </div>
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Products
            </h6>
            {productList.map((el, i) =>(
              <p className='mb-4' key={i + 1}>
                <a href='#!'> {el} </a>
              </p>
            ))}
          </div>
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold uppercase mb:justify-start'>
              usefull Links
            </h6>
            {useFullLink.map((el, i) =>(
              <p className='mb-4' key={i + 1}>
                <a href='#!'> {el} </a>
              </p>
            ))}
          </div>
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold uppercase mb:justify-start'>
              Contact Us
            </h6>
            {contactList.map((el, i) =>(
              <p className='mb-4' key={i + 1}>
                <a href='#!'> {el} </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="backgroundMain p-6 text-center">
        <span>2024 Copyright:</span>
        <a className='font-semibold' href='#!'>
           Shake
        </a>
      </div>
    </footer>
  );
};

export default Footer