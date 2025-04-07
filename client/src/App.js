import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/routing/PrivateRoute';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Public Pages
import Home from './pages/guest/Home';
import LayananTanaman from './pages/guest/layanan/tanaman';
import LayananDesain from './pages/guest/layanan/desain';
import LayananPerawatan from './pages/guest/layanan/perawatan';        
import Blog from './pages/guest/Blog';        
import Kontak from './pages/guest/Kontak';        
import About from './pages/guest/About';
import Login from './pages/guest/Login';
import Register from './pages/guest/Register';
import Unauthorized from './pages/guest/Unauthorized';

// Customer Pages
import CustomerDashboard from './pages/customer/Dashboard';
import CustomerProfile from './pages/customer/Profile';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/Users';
import AdminProducts from './pages/admin/Products';

// Set base URL for axios
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';

function LayoutWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/layanan-tanaman" element={<LayananTanaman />} />
          <Route path="/layanan-desain" element={<LayananDesain />} />
          <Route path="/layanan-perawatan" element={<LayananPerawatan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Kontak />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Customer Routes */}
          <Route 
            path="/customer/dashboard" 
            element={
              // <PrivateRoute roles={['customer', 'admin']}>
                <CustomerDashboard />
              // </PrivateRoute>
            } 
          />
          <Route 
            path="/customer/profile" 
            element={
              // <PrivateRoute roles={['customer', 'admin']}>
                <CustomerProfile />
              // </PrivateRoute>
            } 
          />

          {/* Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              // <PrivateRoute roles={['admin']}>
                <AdminDashboard />
              // </PrivateRoute>
            } 
          />
          <Route 
            path="/admin/users" 
            element={
              <PrivateRoute roles={['admin']}>
                <AdminUsers />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/admin/products" 
            element={
              <PrivateRoute roles={['admin']}>
                <AdminProducts />
              </PrivateRoute>
            } 
          />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <LayoutWrapper />
      </Router>
    </AuthProvider>
  );
}

export default App;
