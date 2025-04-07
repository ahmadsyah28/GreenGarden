import React from 'react';
import { Link } from 'react-router-dom';
import gambarTagline from '../../assets/images/greenspace3.jpg'
import gambarAboutUs from '../../assets/images/greenspace1.jpg'
import gambarTanaman from '../../assets/images/tanaman.png'
import gambarPerawatan from '../../assets/images/penyiram.png'
import gambarDesain from '../../assets/images/desain.png'
import gambarGaleri1 from '../../assets/images/galeri/taman1.jpg'
import gambarGaleri2 from '../../assets/images/galeri/taman2.jpg'
import gambarGaleri3 from '../../assets/images/galeri/taman3.jpg'
import gambarGaleri4 from '../../assets/images/galeri/taman5.jpg'
import gambarGaleri5 from '../../assets/images/galeri/taman6.jpg'
import gambarTestimoni1 from '../../assets/images/testimoni/testimoni1.png'
import gambarTestimoni2 from '../../assets/images/testimoni/testimoni2.png'
import gambarTestimoni3 from '../../assets/images/testimoni/testimoni3.png'
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col">
      <div id='tagline' className='w-full h-[450px] flex  flex-row'>
      <div id='tittle-tagline' className='w-1/2'>
        <p className='font-bold text-4xl mt-[120px] ml-[77px] text-[#404041]'>Kami hadir untuk Menjadikan <br/> Rumah Anda Lebih <br/>Hijau dan Asri</p>
        <p className='ml-[77px] mt-5'>Perawatan adalah kunci utama kebun yang sehat, <br/>indah, dan produktif. Ciptakan ruang hijau terbaik <br/>bersama GreenGarden.</p>
        <Link className='btn btn-primary ml-[77px] mt-5 rounded-[20px] py-3 inline-block font-semibold'>Get Started</Link>
        <Link className='btn btn-secondary ml-10 mt-5 rounded-[20px] py-3 inline-block font-semibold'>Learn More</Link>
      </div>
      <div id='img-tagline'>
        <img src={gambarTagline} alt='tagline green garden' className='w-[600px] ml-[72px]'/>
      </div>
     
      </div>
      <div id='experience' className='flex justify-center pt-4'>
        <div className='w-[757px] flex flex-row py-8 px-5 border border-b-2 border-[#50806B] justify-center space-x-16 rounded-[20px] bg-[#5a9078]'>
          <div id='tahun-pengalaman' className='text-center relative'> 
            <p className='text-white'>
              <span className='text-4xl font-bold'>5 <span className='text-[#caded5]'>+</span></span> 
              <br/>Tahun Pengalaman
              </p>
              <div className='absolute top-0 right-[-33px] h-full w-[3px] bg-white/70'></div>
              </div>
          <div id='desain-taman' className='text-center relative'>
            <p className='text-white'>
              <span className='text-4xl font-bold'>20 <span className='text-[#caded5]'>+</span></span> 
              <br/>Desain Taman
              </p>
              <div className='absolute top-0 right-[-33px] h-full w-[3px] bg-white/70'></div>
              </div>
          <div id='tanaman-hias' className='text-center relative'>
            <p className='text-white'>
              <span className='text-4xl font-bold'>80 <span className='text-[#caded5]'>+</span></span> 
              <br/>Tanaman Hias
              </p>
              <div className='absolute top-0 right-[-33px] h-full w-[3px] bg-white/70'></div>
              </div>
          <div id='pelanggan' className='text-center relative'>
            <p className='text-white'>
              <span className='text-4xl font-bold'>150 <span className='text-[#caded5]' >+</span></span> 
              <br/>Pelanggan
              </p>
              </div>
        </div>
      </div>
      <div id='layanan-kami' className='flex flex-col h-[400px] bg-[#1F2233] mt-10'>
        <div id='tittle-layanan-kami' className='flex flex-col text-center'>
          <p className='text-[#ECE57E] text-2xl font-semibold mt-8'>Layanan Kami</p>
          <p className='text-white text-4xl font-bold'>Penawaran Kami</p>
        </div>
        <div id='card-layanan-kami' className='flex flex-row mt-10 justify-around'>
          <div id='card-layanan-1' className='flex flex-col w-[350px]'>
            <img src={gambarTanaman} alt='tagline green garden' className='w-16'/>            
            <p className='text-white text-xl font-semibold mt-5'>Tanaman Hias</p>
            <p className='text-white text-xl font-thin mt-3'>Koleksi tanaman hias berkualitas <br/>untuk mempercantik rumah Anda.</p>
          </div>
          <div id='card-layanan-2' className='flex flex-col w-[350px]'>
            <img src={gambarPerawatan} alt='tagline green garden' className='w-16'/>            
            <p className='text-white text-xl font-semibold mt-5'>Perawatan Tanaman</p>
            <p className='text-white text-xl font-thin mt-3'>Koleksi tanaman hias berkualitas <br/>untuk mempercantik rumah Anda.</p>
          </div>
          <div id='card-layanan-3' className='flex flex-col w-[350px]'>
            <img src={gambarDesain} alt='tagline green garden' className='w-16'/>            
            <p className='text-white text-xl font-semibold mt-5'>Desain Taman</p>
            <p className='text-white text-xl font-thin mt-3'>Koleksi tanaman hias berkualitas <br/>untuk mempercantik rumah Anda.</p>
          </div>
        </div>
      </div>
      <div id='tentang-kami' className='flex flex-row h-[500px] mt-5 mb-10'>
        <div id='image-tentang-kami' className=' w-1/2'>
        <img className='h-[500px] mx-auto ' src={gambarAboutUs} alt='about us'/>
        </div>
        <div id='tittle-tentang-kami' className='flex flex-col w-1/2 items-center justify-center'>
          <p className='text-[#A7A151] text-3xl font-bold'>Tentang Kami</p>
          <p className='text-2xl mt-5 font-medium text-[#404041]'><span className='font-semibold'><span className='text-[#50806B]'>Green</span>Garden</span> adalah platform e-commerce dan <br/>jasa layanan yang berfokus pada semua kebutuhan <br/>pertamanan dan tanaman hias. Konsep dasar dari <br/>GreenGarden adalah menciptakan solusi lengkap <br/>bagi masyarakat yang ingin memiliki taman indah <br/>atau ruang hijau, namun memiliki keterbatasan <br/>waktu, pengetahuan, atau ruang.</p>
        </div>
      </div>
      <div id='galeri' className=' flex flex-col'>
        <p className='text-[#50806B] text-3xl font-bold text-center my-10'>Galeri Kami</p>
        <div className='flex flex-row mx-[138px] items-center'>
          <div id='image-vertical'><img src={gambarGaleri3} alt='galeri-3' className='w-[320px]' /></div>
          <div id='image-horizontal' className='grid grid-cols-3 gap-2 ml-5'>
          <img src={gambarGaleri1} alt='geleri-1' className='w-[300px]'/>
          <img src={gambarGaleri2} alt='geleri-2' className='w-[300px]'/>
          <img src={gambarGaleri4} alt='geleri-4' className='w-[300px]'/>
          <img src={gambarGaleri5} alt='geleri-5' className='w-[300px]'/>
          <img src={gambarGaleri1} alt='geleri-1' className='w-[300px]'/>
          <img src={gambarGaleri2} alt='geleri-2' className='w-[300px]'/>
      </div>
        </div>
        <div className='flex justify-end mt-4 mr-36'>
          <p className='text-[#404041] text-2xl font-semibold flex items-center'>Lihat Semua</p>
          <FaArrowRight className="ml-2 my-auto text-2xl text-[#404041]" />
        </div>
      </div>

      <div id='testimoni' className='mt-10 mb-10 flex flex-col justify-center items-center'>
        <p className='text-2xl font-bold text-[#50806B]'>Testimoni Mereka</p>
        <div id='card-testimoni' className='mt-16  flex flex-row justify-center gap-40 w-full'>
          <div id='card-isi'>
            <div className='flex flex-row'>
            <img id='' src={gambarTestimoni1} className='w-16' alt='testimoni2'/>
            <p className='ml-2 text-[#50806B] text-lg my-auto font-semibold'>Jessica Watson</p>
            </div>
            <p className='mt-3 text-[#404041]'> "Sangat merekomendasikan <br/>situs web ini untuk bunga dan <br/>tanaman berkualitas. Harga <br/>bagus, pengiriman tepat waktu <br/>dan layanan pelanggan yang <br/>sangat baik. ”</p>
          </div>
          <div id='card-isi'>
            <div className='flex flex-row'>
            <img id='' src={gambarTestimoni2} className='w-16' alt='testimoni2'/>
            <p className='ml-2 text-[#50806B] text-lg my-auto font-semibold'>Grace Tarigan</p>
            </div>
            <p className='mt-3 text-[#404041]'> "Sangat merekomendasikan <br/>situs web ini untuk bunga dan <br/>tanaman berkualitas. Harga <br/>bagus, pengiriman tepat waktu <br/>dan layanan pelanggan yang <br/>sangat baik. ”</p>
          </div>
          <div id='card-isi'>
            <div className='flex flex-row'>
            <img id='' src={gambarTestimoni3} className='w-16' alt='testimoni2'/>
            <p className='ml-2 text-[#50806B] text-lg my-auto font-semibold'>Kate Szu</p>
            </div>
            <p className='mt-3 text-[#404041]'> "Sangat merekomendasikan <br/>situs web ini untuk bunga dan <br/>tanaman berkualitas. Harga <br/>bagus, pengiriman tepat waktu <br/>dan layanan pelanggan yang <br/>sangat baik. ”</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;