# GreenGarden

Website taman dan tanaman yang dikembangkan menggunakan MERN stack (MongoDB, Express.js, React.js, Node.js) dan Tailwind CSS.

## Fitur

- **Autentikasi**: Register, login, dan manajemen pengguna
- **Multi-role**: Guest, Pelanggan, dan Admin
- **Manajemen Produk**: CRUD untuk produk tanaman dan perlengkapan
- **Dashboard Admin**: Statistik, manajemen pengguna, produk, dan pesanan
- **Responsive**: Tampilan yang responsif untuk berbagai perangkat
- **Keamanan**: JWT untuk autentikasi dan otorisasi

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (versi 14 atau lebih baru)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/) (opsional)

## Instalasi

1. **Clone repository** (atau download dan ekstrak ZIP):

```bash
git clone https://github.com/username/green-garden.git
cd green-garden
```

2. **Install semua dependensi** (server dan client):

```bash
npm run install-deps
```

3. **Konfigurasi environment variables**:

Buat file `.env` di folder `server` dan isi dengan variabel lingkungan yang diperlukan:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/greenGarden
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRE=30d
```

4. **Jalankan aplikasi** dalam mode development:

```bash
npm run dev
```

Ini akan menjalankan server pada `http://localhost:5000` dan aplikasi client pada `http://localhost:3000`.

## Struktur Project

```
green-garden/
├── client/                 # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── assets/         # Gambar, font, dll
│   │   ├── components/     # Komponen React yang dapat digunakan kembali
│   │   ├── context/        # React Context untuk state global
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Halaman aplikasi
│   │   │   ├── admin/      # Halaman khusus admin
│   │   │   ├── customer/   # Halaman khusus pelanggan
│   │   │   └── guest/      # Halaman untuk pengunjung
│   │   ├── utils/          # Fungsi utilitas
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
│
├── server/                 # Backend (Node.js/Express)
│   ├── config/             # Konfigurasi database, env, dll
│   ├── controllers/        # Controller untuk endpoint API
│   ├── middleware/         # Middleware (auth, validation, dll)
│   ├── models/             # Model data MongoDB
│   ├── routes/             # Definisi rute API
│   ├── utils/              # Fungsi utilitas
│   ├── server.js           # Entry point aplikasi
│   └── package.json
│
├── .gitignore              # File yang diabaikan Git
├── package.json            # Root package.json untuk script dev
└── README.md               # Dokumentasi proyek
```

## Akses Role

1. **Guest** (Pengunjung):
   - Melihat halaman beranda, layanan(tanaman hias, desain taman, perawatan taman),  blog, kontak
   - Register dan login

2. **Pelanggan**:
   - Semua akses Guest
   - Dashboard pelanggan
   - Profil pengguna
   - Keranjang belanja
   - Riwayat pesanan

3. **Admin**:
   - Semua akses Pelanggan
   - Dashboard admin
   - Manajemen produk
   - Manajemen pengguna
   - Manajemen pesanan
   - Laporan dan statistik

## Teknologi yang Digunakan

### Frontend
- React.js
- Tailwind CSS
- React Router Dom
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Tokens)
- bcrypt.js

## Pengembangan

### Menjalankan Backend saja:

```bash
npm run server
```

### Menjalankan Frontend saja:

```bash
npm run client
```

## Deployment

### Backend:
1. Pastikan file `.env` Anda disiapkan untuk produksi
2. Bangun aplikasi React: `cd client && npm run build`
3. Pada server.js, tambahkan kode untuk menyajikan build React

### Frontend:
Build aplikasi React:
```bash
cd client
npm run build
```

## Kontribusi

Silakan berkontribusi dengan cara:
1. Fork repositori
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan Anda (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## Lisensi

Didistribusikan di bawah lisensi MIT. Lihat `LICENSE` untuk informasi lebih lanjut.

## Kontak

Email: info@greengarden.com
