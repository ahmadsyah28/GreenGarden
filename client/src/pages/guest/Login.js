import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import gambarLogin from "../../assets/images/login.png";
import { FaChevronLeft } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "ahmadsyahrmdn@gmail.com",
    password: "ahmad123",
  });
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const { login, isAuthenticated, error, clearErrors } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
    if (error) {
      setAlert({ show: true, type: "error", message: error });
      clearErrors();
    }
  }, [isAuthenticated, error, navigate, clearErrors]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await login({ email, password });
    if (success) {
      setAlert({ show: true, type: "success", message: "Login berhasil!" });
    }
  };

  return (
    <div className="container mx-auto px-[77px] py-8 flex flex-row gap-8">
      {/* Image Section */}
      <div className="w-1/2 flex flex-col justify-center">
        <Link to="/" className="ml-40 mb-3 text-[#285A43] font-semibold flex items-center cursor-pointer">
          <FaChevronLeft className="w-4 h-4 mr-2" />
          Kembali ke Beranda
        </Link>
        <img src={gambarLogin} alt="login" className="h-[600px] mx-auto" />
      </div>

      {/* Form Section */}
      <div className="w-1/2 flex flex-col justify-center">
        <p className="text-3xl font-bold">Masuk</p>
        <p className="text-lg font-medium text-gray-600 mb-6">Silakan masukkan email dan password Anda</p>

        {alert.show && (
          <div className={`mb-4 p-3 rounded ${alert.type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
            {alert.message}
          </div>
        )}

        <form onSubmit={onSubmit} className="w-full max-w-md">
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285A43]"
              placeholder="Email Anda"
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
              value={password}
              onChange={onChange}
              required
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#285A43]"
              placeholder="Password Anda"
              minLength="6"
            />
          </div>

          {/* Tombol Login */}
          <button type="submit" className="w-full bg-[#285A43] text-white py-2 rounded-lg hover:bg-green-700 transition">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Belum punya akun?{' '}
          <Link to="/register" className="text-[#285A43] font-semibold hover:underline">
            Daftar disini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
