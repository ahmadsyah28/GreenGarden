import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import LayananDropdown from "./LayananDropDown";
import AuthContext from "../../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onLogout = () => {
    logout();
    setIsOpen(false);
  };

  // Menu items berdasarkan role
  const getMenuLinks = () => {
    // Menu untuk guest (belum login)
    if (!isAuthenticated) {
      return (
        <>
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Tentang Kami
          </Link>
          <Link
            to="/login"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Daftar
          </Link>
        </>
      );
    }

    // Menu umum untuk user yang sudah login
    const commonLinks = (
      <>
        <Link
          to="/"
          className="block px-4 py-2 hover:bg-primary-light hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Beranda
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 hover:bg-primary-light hover:text-white"
          onClick={() => setIsOpen(false)}
        >
          Tentang Kami
        </Link>
      </>
    );

    // Menu untuk role customer
    if (user && user.role === "customer") {
      return (
        <>
          {commonLinks}
          <Link
            to="/customer/dashboard"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/customer/profile"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Profil
          </Link>
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 hover:bg-primary-light hover:text-white"
          >
            Logout
          </button>
        </>
      );
    }

    // Menu untuk role admin
    if (user && user.role === "admin") {
      return (
        <>
          {commonLinks}
          <Link
            to="/admin/dashboard"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Dashboard Admin
          </Link>
          <Link
            to="/admin/users"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Kelola Pengguna
          </Link>
          <Link
            to="/admin/products"
            className="block px-4 py-2 hover:bg-primary-light hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Kelola Produk
          </Link>
          <button
            onClick={onLogout}
            className="w-full text-left px-4 py-2 hover:bg-primary-light hover:text-white"
          >
            Logout
          </button>
        </>
      );
    }

    // Default menu
    return commonLinks;
  };

  return (
    <nav className="bg-[#D9D2D2] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center ml-20 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#50806B]">
              Green<span className="text-[#404041]">Garden</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 mr-20 font-bold text-xl">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/"
                  className="px- py-2 text-gray-700 hover:text-primary"
                >
                  Beranda
                </Link>
                <LayananDropdown/>
                <Link
                  to="/Blog"
                  className="px-3 py-2 text-gray-700 hover:text-primary"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="px-3 py-2 text-gray-700 hover:text-primary"
                >
                  Kontak
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 text-gray-700 hover:text-primary"
                >
                  <FaShoppingCart />
                </Link>
                <Link to="/login" className="btn btn-primary rounded-[20px]">
                  Masuk
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="px-3 py-2 text-gray-700 hover:text-primary"
                >
                  Beranda
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 text-gray-700 hover:text-primary"
                >
                  Tentang Kami
                </Link>

                {user && user.role === "customer" && (
                  <>
                    <Link
                      to="/customer/dashboard"
                      className="px-3 py-2 text-gray-700 hover:text-primary"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/customer/profile"
                      className="px-3 py-2 text-gray-700 hover:text-primary"
                    >
                      Profil
                    </Link>
                  </>
                )}

                {user && user.role === "admin" && (
                  <>
                    <Link
                      to="/admin/dashboard"
                      className="px-3 py-2 text-gray-700 hover:text-primary"
                    >
                      Dashboard Admin
                    </Link>
                    <Link
                      to="/admin/users"
                      className="px-3 py-2 text-gray-700 hover:text-primary"
                    >
                      Kelola Pengguna
                    </Link>
                    <Link
                      to="/admin/products"
                      className="px-3 py-2 text-gray-700 hover:text-primary"
                    >
                      Kelola Produk
                    </Link>
                  </>
                )}

                <div className="relative group">
                  <button className="flex items-center px-3 py-2 text-gray-700 hover:text-primary">
                    <FaUser className="mr-1" />
                    {user && user.name}
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                    <div className="py-1">
                      <button
                        onClick={onLogout}
                        className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-primary hover:text-white"
                      >
                        <FaSignOutAlt className="mr-2" />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-2 border-t">{getMenuLinks()}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
