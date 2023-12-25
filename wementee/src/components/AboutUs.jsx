import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ays from '../assets/aysima.jpg';
import emr from '../assets/emi7rhan.jpg';
import eyp from '../assets/eyup.jpg';
import melek from '../assets/melek.jpg';
import melik from '../assets/melik.jpg';
import zey from '../assets/zeynep.jpg';
import yun from '../assets/yunus.jpg';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {

  
        const ay = {
          backgroundImage: `url(${ays})`,
          backgroundSize: 'cover',
        };
      
        const em = {
          backgroundImage: `url(${emr})`,
          backgroundSize: 'cover',
        };
        const ey = {
          backgroundImage: `url(${eyp})`,
          backgroundSize: 'cover',
        };
        const lek = {
          backgroundImage: `url(${melek})`,
          backgroundSize: 'cover',
        };
        const lik = {
          backgroundImage: `url(${melik})`,
          backgroundSize: 'cover',
        };
        const ze = {
          backgroundImage: `url(${zey})`,
          backgroundSize: 'cover',
        };const yu = {
          backgroundImage: `url(${yun})`,
          backgroundSize: 'cover',
        };

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

  return (

    
    <div className="">
      <div className="relative bg-amber-400 top-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-black "></div>
      <div className="w-full top-0 left-0  bg-gradient-to-l from-transparent to-black/60 flex h-[300px] bg-purple-900 ">
      <div className="   container mx-auto px-4">
  <h2 className="pl-16 font-bold text-6xl pt-4 text-white">HAKKIMIZDA</h2>
  <div className=" mb-5 mt-5">
    <div className=" ">
      <p className="scroll-effect text-white pt-5 pl-16 pr-5 pb-5 text-lg mx-4 font-bold">
        Kendi üniversite tercih zamanlarımızda yaşadığımız stres ve kaygı gibi pek çok sıkıntıyla baş etmek zorunda kaldık. Üniversiteye geçtiğimizde ise bölümü ve okulu keşfederken yolumuza çıkan sıkıntılarla ve “acaba doğru bir tercih mi yaptım?” sorularıyla baş başa kaldık. Bizim gibi bu sorunlarla karşılaşan çok fazla öğrenci olduğunu fark edip birbirimizden öğrenebileceğimiz bir topluluk oluşturmaya karar verdik.
      </p>
    </div>
  </div>
  </div>
</div>
<div className='bg-amber-400 w-full h-[300px]'>
    <div className=" pr-4 ">
        <p className="scroll-effect text-purple-900 pt-16 pl-20 pr-5 pb-5 text-lg mx-4 font-bold">
          Dijital pazarlama, girişimcilik, e-ticaret, yazılım gibi pek çok kavramla üniversiteye geçince tanışıyoruz. Adını daha önce hiç duymadığımız meslekler tanıyıp kendimizi o alanlarda geliştirmeye çalışıyoruz. Seçeceğiniz hangi bölüm, hangi üniversite kendinizi geliştirme konusunda sizi destekleyecekse beklentileriniz doğrultusunda arayışa geçmelisiniz. Bu süreçte aynı yollardan geçmiş birileriyle görüşerek, onların yapmış olduğu ve değiştirmek istedikleri ya da “iyi ki” dedikleri konuları not ederek kendi kariyer yolunuzu belirleyebilirsiniz.
        </p>
    </div>
</div>
      
      
<div className='bg-purple-900 top-0 left-0  bg-gradient-to-l from-transparent to-black/60 flex w-full h-[200px]'>
  <div className="flex justify-center mb-10 ">
    <div className=" flex ">
        <p className="scroll-effect text-white pt-16 pl-20 pr-8 pb-5 text-lg mx-4 font-bold">
       Lise öğrencisiyseniz, WeMentee; üniversite hayatında sizleri nelerin beklediği konusunda sizi aydınlatacak rol model alabileceğiniz üniversite öğrencileriyle tanışmanıza aracı olup network geliştirmenize yardımcı olur.
        </p>
     </div>
   </div>
</div>
       
       
<div className='bg-amber-400  w-full h-[200px]'>
     <div className="pt-10 pr-20 ml-16">
         <p className="scroll-effect text-purple-900 pt-5 pl-5 pr-5 pb-5 text-lg mx-4 font-bold">
      Üniversite öğrencileri, WeMentee’de mentorluk yaparken yeni networkler kazanabilir, liderlik yeteneklerini geliştirebilir, birine yardımcı olmanın tatminiyetini yaşar ve çeşitli konu başlıkları altında düzenlenen webinarlara katılarak sektörün başarılı isimlerinden mentorluk desteği de alabilir.  </p>
     </div>
</div>  

     
<div className="w-full h-[800px] top-0 left-0  bg-gradient-to-l from-transparent to-black/60  bg-purple-900">

    <div className='text-amber-400 text-center font-bold pt-12 text-2xl lg:text-4xl '>
         <h2>Biz Kimiz?</h2>
    </div>
    <div className="  pl-48 pr-12 flex space-x-12 ">

       <div className="inline-block py-14 rounded-lg w-64 " >
        <div className="shadow-2xl shadow-black hover:scale-110">
         <img src={emr}  alt="emr"/>
         
         <a href="https://www.linkedin.com/company/wementee/" target="_blank" rel="noopener noreferrer"  className=" text-violet-900 text-5xl hover:text-violet-300">
          <FaLinkedin size={24} />
        </a>
         
        
        </div>
       </div>


     <div className="inline-block py-14 rounded-lg w-64" >
        <div className="shadow-2xl shadow-black hover:scale-110 transition">
         <img src={ays} alt="ays"/>
        
      </div>
     </div>

     <div className="inline-block py-14 rounded-lg w-64" >
        <div className="shadow-2xl shadow-black hover:scale-110">
         <img src={melik}  alt="melik"/>
       
      </div>
     </div>

     <div className="inline-block py-14 rounded-lg w-64" >
        <div className="shadow-2xl shadow-black hover:scale-110">
         <img src={melek} alt="melek"  />
        
      </div>
     </div>
     </div>

      <div className="  pl-80 pr-8 flex space-x-12 ">
      <div className="inline-block py-6 rounded-lg w-64" >
        <div className="shadow-2xl shadow-black hover:scale-110">
         <img src={eyp} alt="eyp"  />
       
      </div>
     </div> 

     <div className="inline-block py-6 rounded-lg w-64" >
        <div className="shadow-2xl shadow-black hover:scale-110">
         <img src={zey} alt="zey" />
        
      </div>
     </div>

     <div className="inline-block py-6 rounded-lg w-64 ring-3 ring-black" >
        <div className="shadow-2xl shadow-black hover:scale-110">
         <img src={yun} alt="yun"/>
        
      </div>
     </div>

     </div>

     
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
  );
};

export default AboutUs;
