import React from 'react';
import vid from '../assets/vid.mp4';
import pic from '../assets/pic.jpg';
import logo from '../assets/logo.png';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

import { Link} from 'react-router-dom';

const Home = () => {

  window.addEventListener('scroll', function() {
    applyScrollEffect();
  });
  
    
  function applyScrollEffect() {
    var elements = document.querySelectorAll('.scroll-effect');
  
    elements.forEach(function(element) {
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (position < windowHeight) {
        element.classList.add('visible');
      }
    });
  }


      
    const handleMenteeFormClick = () => {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdix6n8wpuwhcaU5VwREVVBhke61YLTusBImsvdYvHNZ9rFnQ/viewform?usp=sf_link'; // Mentee Form butonuna tıklandığında yapılacak işlemler
    };
    const handleMentorFormClick = () => {
        window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLScHVdkcmsM2y9uXMyswM591V6wkYe5ODtUdw2GYiN0-hsghlA/viewform?usp=sf_link'; // Mentee Form butonuna tıklandığında yapılacak işlemler
    };   


  return (
    <div className=' w-full h-[600px] relative'>
      <video className='w-full  object-cover h-[600px] ' src={vid} autoPlay loop muted />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-black "></div>
      <div className='absolute w-full h-[600px] top-0 left-0 bg-gray-900/20'></div>
       <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-center font-bold text-white p-10 md:p-16 lg:p-24 xl:p-32 '>
       <div className="flex ">
    
        <p className='text-amber-400 text-8xl pt-8 pr-8'>WE  </p><p className=' text-purple-900 text-8xl mt-8'> MENTEE </p> </div>
        <h2 className='  pr-80 pt-16 text-3xl'> Lise öğrencileri, hedefledikleri bölümleri daha yakından tanıyıp doğru tercihler yapmak için üniversite öğrencileriyle buluşuyor!</h2>
       </div>
     

       <div className='top-0 left-0  bg-gradient-to-l from-transparent to-black/70 flex w-full h-[150px] bg-purple-900'>
        <div  className='scroll-effect max-w-[1240px] mx-auto py-12 px-4 text-white font-bold text-center text-2xl'>
            <h3>WeMentee üniversite öğrencileri ve lise öğrencileri arasında mentor-mentee ilişkisi oluşturmayı hedefleyen yeni bir girişimdir.</h3>
      </div>
        </div>
        <div className=' w-full h-[600px] bg-amber-400'>
        <div className="max-w-[1240px] mx-auto px-6 py-10">
      <div id="scrollAnimation"className="flex flex-col items-center text-white">
        
      <p className="scroll-effect text-center text-xl font-bold lg:text-2xl mb-4">
        Üniversite döneminde kazandığı deneyimleri lise öğrencilerine aktararak doğru tercihler yapan, ne istediğini bilen vizyoner gençler oluşturmak için gönüllü olmak isteyen mentorlarımızı arıyoruz.
      </p>
      <h2 className="text-3xl text-purple-900 lg:text-4xl font-bold">Peki Ya Mentor ve Mentee Nedir?</h2>
      </div>
     <div className="flex flex-col lg:flex-row justify-between space-x-16  text-white mt-8">
      <div className="w-full lg:w-1/2">
      <p className="scroll-effect text-lg lg:text-xl font-bold mb-4 ">
        Geniş deneyime sahip biriyle öğrenmek isteyen biri arasında bir gelişme ortaklığı kurulur ve bu ortaklıktaki deneyimli kişiye <span className="highlight font-bold">mentor</span> denir.
        Sizler de eğer lise öğrencisi veya üniversiteye geçiş için hazırlanan mezun bir öğrenciyseniz <span className="highlight font-bold">wementee</span> aracılığıyla hedeflerinizde yolunuzu aydınlatacak mentorlarla tanışabilirsiniz.
      </p>
    </div>
    <div className=" w-full lg:w-1/2 ">
      <p className="scroll-effect text-lg font-bold lg:text-xl mb-4 ">
        Bilgi ve beceri isteyen, bir problemle karşılaşıp en verimli şekilde nasıl giderebileceğini merak eden veya yeni aldığı bir kararla ilgili olası sonuçları hesaplayan, bunun için bir akıl hocasına danışan kişiye <span className="highlight font-bold">mentee (menti)</span>  denir.
        Sizler de <span className="highlight font-bold">wementee</span> aracılığıyla bir akıl hocasıyla tanışıp bir mentee olabilirsiniz. Böylece kariyerinizi yönlendirme konusunda temeli sağlam attığınızdan emin olabilirsiniz.
      </p>
    </div>
  </div>
  <div className="flex justify-between mt-8">
    <div className='pl-20'>
      <h2 className="text-2xl lg:text-3xl  text-purple-900 font-bold">Mentor Olmak İçin Tıkla</h2>
      <div className='pl-20'>
        <button
        className="pl-5 border-2 border-white rounded-full py-2 px-4 text-xl text-purple-900 hover:bg-purple-900 hover:text-black mt-4"
        onClick={() => handleMentorFormClick()}
      >
        Mentor Form
      </button>
      </div>
    </div>
    <div className='pr-40'>
      <h2 className="text-2xl lg:text-3xl  text-purple-900 font-bold">Mentee Olmak İçin Tıkla</h2>
      <div className='pl-20'>
        <button
          className="border-2 border-white rounded-full py-2 px-4 text-xl text-purple-900 hover:bg-purple-900 hover:text-black mt-4"
          onClick={() => handleMenteeFormClick()}
        >
          Mentee Form
        </button>
        </div>
    </div>
  </div>
</div>

       </div>



       <div className='top-0 left-0  bg-gradient-to-l from-transparent to-black/60 flex w-full  h-[500px] bg-purple-900'>
       
         <div className="m-20 flex-1 pt-10 pl-4">
         
         <p className="scroll-effect text-white font-bold text-4xl ">Üniversiteye hazırlanan öğrencileri hayallerine, hedeflerine yönelik alanlarda rol model alabilecek bir figürle tanıştırarak daha vizyoner gençler oluşturmayı hedefliyoruz.</p>
       </div> 
       <div className="m-20 flex-1 justify-items-center pr-4">
         
         <p className="pl-5 text-white italic text-3xl pb-5">“İnsana yapılacak en büyük iyilik ona zenginliği bahşetmek değil, ondaki zenginliği fark etmesini sağlamaktır.”  </p>
         <p className="pl-5 text-amber-400 italic text-3xl pt-5"> Benjamin Disraeli</p>
         
         <p className="pl-5 text-white italic text-3xl pt-5 ">“Plansız bir hedef, dilekten başka bir şey değildir.”   </p>
         <p className="pl-5 text-amber-400 italic text-3xl pt-5"> Antoine de Saint-Exupéry</p></div>
         
       </div>

       <div className="w-full h-[200px] bg-amber-400 flex flex-col justify-center px-6 py-24 mx-auto">
  <div className="container flex items-center justify-between mx-auto max-w-[1240px]">
    <div className="pl-20">
      <a href="/">
      <img src={logo} alt="Logo" className=" pt-20 w-60 h-50 bg-transparent " />
      </a>
    </div>
    <div className="flex items-center justify-center space-x-4 flex-grow">
      <p className="p-1 px-6 pt-2 text-purple-950 text-xl font-bold">
      SOSYAL MEDYA HESAPLARIMIZI TAKİP ETMEYİ UNUTMAYIN!  
      </p>
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/company/wementee/" target="_blank" rel="noopener noreferrer"  className="text-violet-900 text-5xl hover:text-violet-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://instagram.com/wementee?igshid=MzNlNGNkZWQ4Mg" target="_blank" rel="noopener noreferrer"  className="text-violet-900 text-5xl hover:text-violet-300">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  </div>
</div>






     </div>
  )
}

export default Home