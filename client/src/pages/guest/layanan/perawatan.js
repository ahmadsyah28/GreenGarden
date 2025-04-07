import React from "react";
import pupuk from "../../../assets/images/pupuk.png";
import sampah from "../../../assets/images/sampah.png";
import gunting from "../../../assets/images/gunting.png";
import spray from "../../../assets/images/spray.png";
import layananTukang from "../../../assets/images/tukang.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="container">
      {/* Header */}
      <div id="header-tanaman-hias" className="h-24 bg-[#89A99A] flex">
        <p className="text-[#404041] my-auto text-3xl font-bold ml-[77px]">
          Perawatan Tanaman
        </p>
        <div className="h-3/5 my-auto w-[4px] bg-[#404041] ml-10"></div>
        <p className="text-[#404041] my-auto ml-5">
          Temukan Perawatan Ideal untuk Taman Anda{" "}
        </p>
      </div>

      {/* deskripsi singkat */}
      <div className="flex flex-row py-10">
        {/* tittle deskripsi */}
        <div className="flex flex-col w-3/5 ml-[77px] pt-16 pb-10">
          <p className="text-[#404041] font-bold text-5xl">
            Tukang Taman untuk <br />
            Pemeliharaan / Perawatan
          </p>
          <div className="w-2/3">
            <p className="text-[#404041] font-medium text-xl mt-5 w-[663px] text-justify">
              Percayakan perawatan taman Anda pada layanan profesional kami.
              Dengan tim ahli yang berdedikasi, kami memastikan kelestarian dan
              keindahan taman melalui pemangkasan presisi, penyiraman terjadwal,
              pemupukan tepat, serta pengendalian hama dan penyakit. Kami juga
              menawarkan desain lanskap kreatif untuk menyegarkan tampilan
              taman. Nikmati keindahan dan kesejahteraan alam di sekitar Anda
              hubungi kami sekarang untuk transformasi taman yang memukau!
            </p>
          </div>
        </div>

        {/* image deskripsi */}
        <div className="w-2/5">
          <img
            src={layananTukang}
            alt="layananTukang.png"
            className="w-[432px]"
          />
        </div>
      </div>

      {/* apa saja yang di dapat */}

      <div
        id="layanan-kami"
        className="flex flex-col items-center h-[350px] bg-[#1F2233] mt-10 px-[77px]"
      >
        <div id="tittle-layanan-kami" className="text-center">
          <p className="text-[#ECE57E] text-2xl font-semibold mt-8">
            Apa saja yang didapat
            <br />
            dalam paket perawatan?
          </p>
        </div>

        <div
          id="card-layanan-kami"
          className="flex flex-row justify-center gap-x-32 mt-10 w-full max-w-5xl"
        >
          <div
            id="card-layanan-1"
            className="flex flex-col items-center w-[350px]"
          >
            <img src={pupuk} alt="Pupuk Bunga" className="w-16" />
            <p className="text-white text-xl font-semibold mt-5 text-center">
              Pupuk Bunga <br />
              dan Daun
            </p>
          </div>
          <div
            id="card-layanan-2"
            className="flex flex-col items-center w-[350px]"
          >
            <img src={sampah} alt="Pembersihan Sampah" className="w-16" />
            <p className="text-white text-xl font-semibold mt-5 text-center">
              Pembersihan
              <br />
              Sampah Pasca
              <br />
              Perawatan
            </p>
          </div>
          <div
            id="card-layanan-3"
            className="flex flex-col items-center w-[350px]"
          >
            <img src={gunting} alt="Pemangkasan" className="w-16" />
            <p className="text-white text-xl font-semibold mt-5 text-center">
              Pemangkasan
              <br />
              dan Perawatan
            </p>
          </div>
          <div
            id="card-layanan-4"
            className="flex flex-col items-center w-[350px]"
          >
            <img src={spray} alt="Penyemprotan" className="w-16" />
            <p className="text-white text-xl font-semibold mt-5 text-center">
              Pupuk Bunga
              <br />
              dan Daun
            </p>
          </div>
        </div>
      </div>

      {/* daftar paket */}

      <div className="mt-10 text-center">
        <p className="text-[#404041] text-2xl font-semibold">
          Temukan Layanan Perawatan Taman
          <br />
          yangSesuai untuk Anda
        </p>
        <div className="flex flex-col items-center space-y-4 mt-10">
          {/* Tombol Navigasi */}
          <div className="flex items-center space-x-6">
            {/* Tombol Panah Kiri */}
            <button className="w-12 h-12 border-2 border-green-600 rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition">
              <FaArrowLeft className="text-xl" />
            </button>

            {/* Tombol Panah Kanan */}
            <button className="w-12 h-12 border-2 border-green-800 rounded-full flex items-center justify-center text-green-800 hover:bg-green-800 hover:text-white transition">
              <FaArrowRight className="text-xl" />
            </button>
          </div>

          {/* Deskripsi */}
          <p className="text-primary text-lg font-semibold text-center">
            Garden Care untuk taman Ukuran 1-20m
          </p>
        </div>
        <div className="flex flex-row justify-center mt-10 mb-20 gap-x-40">
          <div
            id="isi card"
            className="py-5 px-5 border-2 border-slate-500 shadow-xl rounded-[20px]"
          >
            <p className="text-[#404041] text-2xl font-semibold ">
              1 Kali Perawatan
            </p>
            <p className="text-primary font-bold text-3xl">399.000</p>
          </div>
          <div
            id="isi card"
            className="py-5 px-5 border-2 border-slate-500 shadow-xl rounded-[20px]"
          >
            <p className="text-[#404041] text-2xl font-semibold ">
            Paket 3 Bulan
            </p>
            <p className="text-primary font-bold text-3xl">999.000</p>
          </div>
          <div
            id="isi card"
            className="py-5 px-5 border-2 border-slate-500 shadow-xl rounded-[20px]"
          >
            <p className="text-[#404041] text-2xl font-semibold ">
              Paket 6 bulan
            </p>
            <p className="text-primary font-bold text-3xl">1.399.000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
