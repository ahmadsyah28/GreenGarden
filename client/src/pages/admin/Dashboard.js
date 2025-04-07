import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaShoppingCart, FaBox, FaMoneyBillWave } from 'react-icons/fa';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0
  });
  const [loading, setLoading] = useState(true);

  // Data dummy untuk contoh
  useEffect(() => {
    // Dalam aplikasi asli, ini akan diganti dengan fetch dari API
    const fetchStats = async () => {
      // Simulasi fetching data
      setTimeout(() => {
        setStats({
          users: 145,
          products: 78,
          orders: 320,
          revenue: 25680000
        });
        setLoading(false);
      }, 1000);
    };

    fetchStats();
  }, []);

  // Data untuk grafik (dummy)
  const recentOrders = [
    { id: 1, customer: 'Budi Santoso', date: '2023-06-15', total: 450000, status: 'Selesai' },
    { id: 2, customer: 'Dewi Anggraini', date: '2023-06-14', total: 275000, status: 'Dikirim' },
    { id: 3, customer: 'Ahmad Fauzi', date: '2023-06-14', total: 580000, status: 'Diproses' },
    { id: 4, customer: 'Siti Rahayu', date: '2023-06-13', total: 320000, status: 'Selesai' },
    { id: 5, customer: 'Rudi Hermawan', date: '2023-06-12', total: 190000, status: 'Dibatalkan' },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Admin</h1>
          <p className="text-gray-600">Selamat datang kembali, {user?.name || 'Admin'}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link to="/admin/products/add" className="btn btn-primary">
            Tambah Produk Baru
          </Link>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="card bg-white flex items-center">
          <div className="p-4 bg-blue-100 rounded-lg mr-4">
            <FaUsers className="text-blue-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Pengguna</p>
            <h3 className="text-2xl font-bold">{stats.users}</h3>
          </div>
        </div>
        <div className="card bg-white flex items-center">
          <div className="p-4 bg-green-100 rounded-lg mr-4">
            <FaBox className="text-green-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Produk</p>
            <h3 className="text-2xl font-bold">{stats.products}</h3>
          </div>
        </div>
        <div className="card bg-white flex items-center">
          <div className="p-4 bg-purple-100 rounded-lg mr-4">
            <FaShoppingCart className="text-purple-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Pesanan</p>
            <h3 className="text-2xl font-bold">{stats.orders}</h3>
          </div>
        </div>
        <div className="card bg-white flex items-center">
          <div className="p-4 bg-yellow-100 rounded-lg mr-4">
            <FaMoneyBillWave className="text-yellow-600 text-2xl" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Pendapatan</p>
            <h3 className="text-2xl font-bold">Rp {stats.revenue.toLocaleString()}</h3>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="card bg-white mb-8">
        <div className="flex justify-between items-center mb-4 p-6 pb-0">
          <h2 className="text-xl font-bold">Pesanan Terbaru</h2>
          <Link to="/admin/orders" className="text-primary hover:underline">
            Lihat Semua
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pelanggan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">#{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    Rp {order.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${order.status === 'Selesai' ? 'bg-green-100 text-green-800' : ''}
                        ${order.status === 'Dikirim' ? 'bg-blue-100 text-blue-800' : ''}
                        ${order.status === 'Diproses' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${order.status === 'Dibatalkan' ? 'bg-red-100 text-red-800' : ''}
                      `}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Links & Activity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="card bg-white">
          <h2 className="text-xl font-bold mb-4 p-6 pb-2">Aksi Cepat</h2>
          <div className="p-6 pt-0">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/admin/products/add"
                  className="block w-full px-4 py-2 text-center bg-primary text-white rounded hover:bg-primary-dark"
                >
                  Tambah Produk Baru
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/users"
                  className="block w-full px-4 py-2 text-center bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Kelola Pengguna
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/orders"
                  className="block w-full px-4 py-2 text-center bg-purple-500 text-white rounded hover:bg-purple-600"
                >
                  Lihat Semua Pesanan
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/categories"
                  className="block w-full px-4 py-2 text-center bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Kelola Kategori
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/reports"
                  className="block w-full px-4 py-2 text-center bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Lihat Laporan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Products */}
        <div className="card bg-white md:col-span-2">
          <div className="flex justify-between items-center mb-4 p-6 pb-0">
            <h2 className="text-xl font-bold">Produk Populer</h2>
            <Link to="/admin/products" className="text-primary hover:underline">
              Lihat Semua
            </Link>
          </div>
          <div className="p-6 pt-0">
            <ul className="divide-y divide-gray-200">
              <li className="py-3 flex justify-between">
                <div className="flex items-center">
                  <img src="/api/placeholder/50/50" alt="Produk" className="w-10 h-10 rounded" />
                  <div className="ml-3">
                    <p className="font-medium">Tanaman Monstera</p>
                    <p className="text-sm text-gray-500">250 terjual</p>
                  </div>
                </div>
                <span className="font-bold">Rp 250.000</span>
              </li>
              <li className="py-3 flex justify-between">
                <div className="flex items-center">
                  <img src="/api/placeholder/50/50" alt="Produk" className="w-10 h-10 rounded" />
                  <div className="ml-3">
                    <p className="font-medium">Pupuk Organik Premium</p>
                    <p className="text-sm text-gray-500">180 terjual</p>
                  </div>
                </div>
                <span className="font-bold">Rp 75.000</span>
              </li>
              <li className="py-3 flex justify-between">
                <div className="flex items-center">
                  <img src="/api/placeholder/50/50" alt="Produk" className="w-10 h-10 rounded" />
                  <div className="ml-3">
                    <p className="font-medium">Set Alat Berkebun</p>
                    <p className="text-sm text-gray-500">120 terjual</p>
                  </div>
                </div>
                <span className="font-bold">Rp 180.000</span>
              </li>
              <li className="py-3 flex justify-between">
                <div className="flex items-center">
                  <img src="/api/placeholder/50/50" alt="Produk" className="w-10 h-10 rounded" />
                  <div className="ml-3">
                    <p className="font-medium">Pot Tanaman Keramik</p>
                    <p className="text-sm text-gray-500">95 terjual</p>
                  </div>
                </div>
                <span className="font-bold">Rp 120.000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;