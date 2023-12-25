import React from 'react';
import { useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import { Link} from 'react-router-dom';

const Navbar = () => {


    const history = useNavigate();
    
    const handleMenteeFormClick = () => {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdix6n8wpuwhcaU5VwREVVBhke61YLTusBImsvdYvHNZ9rFnQ/viewform?usp=sf_link'; // Mentee Form butonuna tıklandığında yapılacak işlemler
    };
    const handleMentorFormClick = () => {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScHVdkcmsM2y9uXMyswM591V6wkYe5ODtUdw2GYiN0-hsghlA/viewform?usp=sf_link'; // Mentee Form butonuna tıklandığında yapılacak işlemler
    };
        
    
    
    
  return (
    <div className="flex w-full items-center h-20 px-4 absolute z-10 text-white justify-between">
  <div className="pl-40 logo">
    <a href="/">
      <img src={logo} alt="Logo" className="pt-20 w-60 h-60 bg-transparent " />
    </a>
  </div>
  <div className="pr-60">
    <ul className="flex justify-between space-x-4">
    <li>
            <Link to="/about-us">
              <button className="border-2 border-white rounded-full py-2 px-4 text-white hover:bg-white hover:text-black">
                Hakkımızda
              </button>
            </Link>
          </li>
      <li>
        <button
          className="border-2 border-white rounded-full py-2 px-4 text-white hover:bg-white hover:text-black"
          onClick={() => handleMentorFormClick()}
        >
          Mentor Form
        </button>
      </li>
      <li>
        <button
          className="border-2 border-white rounded-full py-2 px-4 text-white  hover:bg-white hover:text-black"
          onClick={() => handleMenteeFormClick()}
        >
          Mentee Form
        </button>
      </li>
    </ul>
  </div>
</div>

 )
}

export default Navbar