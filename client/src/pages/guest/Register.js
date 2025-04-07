import React from "react";
import gambarLogin from "../../assets/images/login.png";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto px-[77px] py-8 flex flex-row gap-8">
      {/* Image Section */}
      <div id="registrasi" className="w-1/2 flex flex-col justify-center">
        <Link to="/" className="ml-40 mb-3 text-[#285A43] font-semibold flex items-center cursor-pointer">
          <FaChevronLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
        <img src={gambarLogin} alt="login" className="h-[600px] mx-auto" />
      </div>

      {/* Form Section */}
      <div className="w-1/2 flex flex-col justify-center">
        <p className="text-3xl font-bold">Daftar Akun</p>
        <p className="text-lg font-medium text-gray-600 mb-6">
          Pastikan data yang Anda masukkan benar
        </p>

        <form className="w-full max-w-md">
          {/* Nama Input */}
          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285A43]"
              placeholder="Nama Lengkap"
            />
          </div>
          
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285A43]"
              placeholder="Email Anda"
            />
          </div>
          
          {/* No Handphone Input */}
          <div className="mb-4">
            <label htmlFor="no_hp" className="block text-sm font-medium mb-2">
              No Handphone
            </label>
            <input
              type="text"
              id="no_hp"
              name="no_hp"
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285A43]"
              placeholder="No Handphone"
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285A43]"
              placeholder="Password"
            />
          </div>
          
          {/* Konfirmasi Password Input */}
          <div className="mb-4">
            <label htmlFor="konfirmasi_password" className="block text-sm font-medium mb-2">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="konfirmasi_password"
              name="konfirmasi_password"
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285A43]"
              placeholder="Konfirmasi Password"
            />
          </div>
          
          {/* Tombol Daftar */}
          <button 
            type="submit" 
            className="w-full bg-[#285A43] text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Daftar
          </button>
        </form>
        <p className="text-center mt-4">
                  Sudah punya akun?{' '}
                  <Link to="/login" className="text-[#285A43] font-semibold hover:underline">
                    Masuk
                  </Link>
                </p>
      </div>
    </div>
  );
};

export default Register;
