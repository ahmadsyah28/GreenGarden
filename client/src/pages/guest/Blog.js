import React from "react";
import gambarTestimoni1 from "../../assets/images/testimoni/testimoni1.png";
import gambarTestimoni2 from "../../assets/images/testimoni/testimoni2.png";
import gambarTestimoni3 from "../../assets/images/testimoni/testimoni3.png";
import gambarBlog1 from "../../assets/images/blog/blog1.png";
import gambarBlog2 from "../../assets/images/blog/blog2.png";
import gambarBlog3 from "../../assets/images/blog/blog3.png";

const Blog = () => {
  return (
    <div className="container mx-auto  px-[77px] py-8">
      <p className="text-3xl text-[#343D33] mp-5">Blogs & Updates</p>

      {/* highlight blog */}
      <div id="hightlight-blog" className="mt-10">
        <div className="flex flex-row w-full">
          <div className="w-1/2">
            <img
              alt="hightlight"
              id="highlight"
              className="w-[600px] border shadow-2xl shadow-gray-500/50 rounded-[20px]"
              src={gambarBlog1}
            />
          </div>
          <div className="w-1/2">
            <div className="py-2 px-5 border border-slate-500 rounded-[20px] inline-block bg-[#50806B] mb-5">
              <p className="font-bold text-white">Blog</p>
            </div>
            <p
              id="title-highlight"
              className="text-[#404041] text-3xl font-bold mb-5"
            >
              Awas Bubble Economy & Monkey Business <br />
              Mahalnya Tanaman Hias
            </p>
            <p id="description" className="text-xl text-justify mb-10">
              Belakangan ini eksistensi tanaman hias semakin naik daun. Ini
              lantaran pandemi virus corona membuat sebagian besar mobilitas
              masyarakat di rumah lebih besar dibanding di luar rumah{" "}
              <span className="text-blue-700">... baca selengkapnya</span>
            </p>
            <div className="flex flex-row">
              <img
                id=""
                src={gambarTestimoni3}
                className="w-16"
                alt="testimoni2"
              />
              <p className="ml-2 text-[#50806B] text-lg my-auto font-semibold">
                Kate Szu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* blog lainnya */}

      <div className="mt-16 text-center flex flex-col">
        <p className="text-[#404041] text-3xl font-semibold underline mb-10">
          Baca Berita Lainnya
        </p>

        {/* blog card */}
        <div className="flex  flex-wrap gap-x-10 gap-y-5">
          <div className="flex flex-col w-[300px] rounded-[20px] border shadow-2xl shadow-gray-500/50">
            {/* isi blog card */}
            <img
              className="rounded-t-[20px]"
              alt="blog1.png"
              src={gambarBlog2}
            />
            <div className="py-1 px-2 border border-slate-500 rounded-xl ml-2 mt-3 bg-[#50806B] mb-1 w-fit">
              <p className="font-thin text-white">Artikel</p>
            </div>
            <p className=" text-start font-semibold text-xl text-[#404041] ml-2">
              Bunga Matahari: Simbol Kecantikan dan Harapan
            </p>
            <p className="text-start  text-sm text-[#404041] font-thin mt-3 ml-2">
              Apakah kamu sedang mencari arti bunga matahari ?Kamu mungkin salah
              satu orang yang mendengar lagu Gala Bunga Matahari dari Sal
            </p>
            <div className="flex flex-row ml-2 mt-5 mb-3">
              <img
                id=""
                src={gambarTestimoni3}
                className="w-10"
                alt="testimoni2"
              />
              <p className="ml-2 text-[#50806B] text-lg my-auto font-semibold">
                Kate Szu
              </p>
            </div>
          </div>

          <div className="flex flex-col w-[300px] rounded-[20px] border shadow-2xl shadow-gray-500/50">
            {/* isi blog card */}
            <img
              className="rounded-t-[20px]"
              alt="blog1.png"
              src={gambarBlog3}
            />
            <div className="py-1 px-2 border border-slate-500 rounded-xl ml-2 mt-3 bg-[#50806B] mb-1 w-fit">
              <p className="font-thin text-white">Blog</p>
            </div>

            <p className=" text-start font-semibold text-xl text-[#404041] ml-2">
              Desain Taman Hotel: Strategi CerdasTingkatkan
            </p>
            <p className="text-start  text-sm text-[#404041] font-thin mt-3 ml-2">
              Desain taman yang indah dan fungsional memegang peranan penting
              dalam meningkatkan daya tarik hotel, menciptakan suasana nyaman
              bagi tamu ...
            </p>
            <div className="flex flex-row ml-2 mt-5 mb-3">
              <img
                id=""
                src={gambarTestimoni2}
                className="w-10"
                alt="testimoni2"
              />
              <p className="ml-2 text-[#50806B] text-lg my-auto font-semibold">
                Grace Tarigan
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[300px] rounded-[20px] border shadow-2xl shadow-gray-500/50">
            {/* isi blog card */}
            <img
              className="rounded-t-[20px]"
              alt="blog1.png"
              src={gambarBlog2}
            />
            <div className="py-1 px-2 border border-slate-500 rounded-xl ml-2 mt-3 bg-[#50806B] mb-1 w-fit">
              <p className="font-thin text-white">Artikel</p>
            </div>
            <p className=" text-start font-semibold text-xl text-[#404041] ml-2">
              Bunga Matahari: Simbol Kecantikan dan Harapan
            </p>
            <p className="text-start  text-sm text-[#404041] font-thin mt-3 ml-2">
              Apakah kamu sedang mencari arti bunga matahari ?Kamu mungkin salah
              satu orang yang mendengar lagu Gala Bunga Matahari dari Sal
            </p>
            <div className="flex flex-row ml-2 mt-5 mb-3">
              <img
                id=""
                src={gambarTestimoni3}
                className="w-10"
                alt="testimoni2"
              />
              <p className="ml-2 text-[#50806B] text-lg my-auto font-semibold">
                Kate Szu
              </p>
            </div>
          </div>

          <div className="flex flex-col w-[300px] rounded-[20px] border shadow-2xl shadow-gray-500/50">
            {/* isi blog card */}
            <img
              className="rounded-t-[20px]"
              alt="blog1.png"
              src={gambarBlog3}
            />
            <div className="py-1 px-2 border border-slate-500 rounded-xl ml-2 mt-3 bg-[#50806B] mb-1 w-fit">
              <p className="font-thin text-white">Blog</p>
            </div>

            <p className=" text-start font-semibold text-xl text-[#404041] ml-2">
              Desain Taman Hotel: Strategi CerdasTingkatkan
            </p>
            <p className="text-start  text-sm text-[#404041] font-thin mt-3 ml-2">
              Desain taman yang indah dan fungsional memegang peranan penting
              dalam meningkatkan daya tarik hotel, menciptakan suasana nyaman
              bagi tamu ...
            </p>
            <div className="flex flex-row ml-2 mt-5 mb-3">
              <img
                id=""
                src={gambarTestimoni2}
                className="w-10"
                alt="testimoni2"
              />
              <p className="ml-2 text-[#50806B] text-lg my-auto font-semibold">
                Grace Tarigan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
