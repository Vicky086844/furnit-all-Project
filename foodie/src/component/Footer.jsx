
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerData = {
    Foodio :["Viverra gravida morbi egestas facilisis tortor netus non duis tempor."],
    Page: ["Home", "Menu", "Order-online"],
    Information: ["About-Us", "Testimonial", "Event"],
    Contacts :["3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat" ," delizioso@gmail.com"," +123 4567 8901"]
  };

  return (
    <footer className='flex md:flex-row flex-col bg-black bg-opacity-95 gap-5 py-10 px-8 '>
      {Object.keys(footerData).map((key) => (
        <ul className=' px-8 py-6  '  key={key}>
            <h1 className='text-2xl text-rose-800  font-bold '>{key}</h1>
          {footerData[key].map((item) => (
            <Link to={item === "Home" || "Menu" || "Order-online" || "About-Us" ? 
            `${ item === "Home" ? `/` : `${item.toLowerCase()}`}` : null}>
            <li className='text-white  font-medium py-1.5 w-1/2' key={item}>{item}</li>
            </Link>
          ))}
        </ul>
      ))}
      {/* <p className='text-white'>Copyright@2022 Foodio</p> */}
    </footer>
  );
}

export default Footer;
