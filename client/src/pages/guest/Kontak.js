import React, { useState } from 'react';
import gambarContact from '../../assets/images/contact.png'

const Kontak = () => {
  const [contactMethod, setContactMethod] = useState('email'); // Default email

  return (
    <div className="container mx-auto py-8 px-10 flex justify-center  my-10">
      <div className="w-full max-w-4xl flex bg-[#50806B] rounded-2xl overflow-hidden shadow-lg">
        
        {/* Bagian Gambar */}
        <div className="w-1/2">
          <img 
            src={gambarContact}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bagian Form */}
        <div className="w-1/2 p-6 text-white">
          <p className="text-3xl font-bold mb-6">Hubungi Kami</p>

          {/* Pilihan Metode Kontak */}
          <div className="flex space-x-2 mb-6">
            <button 
              onClick={() => setContactMethod('email')} 
              className={`px-4 py-2 rounded ${contactMethod === 'email' ? 'bg-white text-[#50806B]' : 'bg-[#406954]'}`}
            >
              Email
            </button>
            <button 
              onClick={() => setContactMethod('whatsapp')} 
              className={`px-4 py-2 rounded ${contactMethod === 'whatsapp' ? 'bg-white text-[#50806B]' : 'bg-[#406954]'}`}
            >
              WhatsApp
            </button>
          </div>

          {/* Form */}
          <input 
            type="text" 
            placeholder="Nama Lengkap" 
            className="w-full p-2 mb-4 border rounded text-black"
          />
          {contactMethod === 'email' ? (
            <>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-2 mb-4 border rounded text-black"
              />
              <textarea 
                placeholder="Pesan Anda" 
                className="w-full p-2 border rounded text-black resize-none max-h-24 h-24 overflow-y-auto"
              ></textarea>
            </>
          ) : (
            <>
              <input 
                type="text" 
                placeholder="Nomor WhatsApp" 
                className="w-full p-2 mb-4 border rounded text-black"
              />
              <textarea 
                placeholder="Pesan Anda" 
                className="w-full p-2 border rounded text-black resize-none max-h-24 h-24 overflow-y-auto"
              ></textarea>
            </>
          )}
          <button className="mt-4 w-full bg-[#404041] text-white py-2 rounded-lg font-semibold">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
