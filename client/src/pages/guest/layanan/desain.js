import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import desainTaman1 from '../../../assets/images/desain/desain1.png'
import desainTaman2 from '../../../assets/images/desain/desain2.png'
import desainTaman3 from '../../../assets/images/desain/desain3.png'
import desainTaman4 from '../../../assets/images/desain/desain4.png'
import desainTaman5 from '../../../assets/images/desain/desain5.png'
import desainTaman6 from '../../../assets/images/desain/desain6.png'
import desainTaman7 from '../../../assets/images/desain/desain7.jpg'
import desainTaman8 from '../../../assets/images/desain/desain8.jpg'

const categories = [
  {
    name: "Minimalis",
    items: ["Alocasia", "Hoya", "Sansevieria", "Syngonium"],
  },
  { name: "Tropis", items: [] },
  { name: "Kering", items: [] },
];

const sortOptions = ["Popular", "Termurah", "Termahal"];

const DesainTaman = () => {
  const [openCategories, setOpenCategories] = useState({});
  const [selectedSort, setSelectedSort] = useState("Popular");
  const [isSortOpen, setIsSortOpen] = useState(false);

  const toggleCategory = (categoryName) => {
    setOpenCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="container">
      {/* Header */}
      <div id="header-tanaman-hias" className="h-24 bg-[#89A99A] flex">
        <p className="text-[#404041] my-auto text-3xl font-bold ml-[77px]">
          Desain Taman
        </p>
        <div className="h-3/5 my-auto w-[4px] bg-[#404041] ml-10"></div>
        <p className="text-[#404041] my-auto ml-5">
          Desain Taman Siap Pakai untuk Mewujudkan Taman Impian Anda
        </p>
      </div>

      {/* Market Place */}
      <div className="flex h-auto">
        {/* Pilihan */}
        <div id="pilihan" className=" w-[320px] h-full">
          <div className="w-56 p-4 mt-16 ml-[77px] bg-white shadow-md rounded-lg">
            {/* All Categories */}
            <div className="mb-2">
              <div className="flex items-center gap-2 text-lg font-semibold">
                {/* <FaAngleRight className="w-4 h-4" /> */}
                All Categories
              </div>
              <p className="text-gray-500 text-sm">Desain on Sale</p>
            </div>

            {/* Looping untuk kategori */}
            {categories.map((category) => (
              <div key={category.name} className="mb-2">
                <div
                  className="flex items-center gap-2 font-semibold cursor-pointer"
                  onClick={() => toggleCategory(category.name)}
                >
                  {openCategories[category.name] ? (
                    <FaAngleDown className="w-4 h-4" />
                  ) : (
                    <FaAngleRight className="w-4 h-4" />
                  )}
                  {category.name}
                </div>

                {openCategories[category.name] && (
                  <div className="ml-6 text-gray-600">
                    {category.items.length > 0 ? (
                      category.items.map((item) => <p key={item}>{item}</p>)
                    ) : (
                      <p className="text-gray-400">No items</p>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Price Dropdown */}
            {/* <div className="mt-4 p-3 bg-white shadow-md rounded-lg flex justify-between items-center">
              <span className="text-gray-800">Price</span>
              <FaAngleDown className="w-4 h-4 text-gray-500" />
            </div> */}
          </div>
        </div>

        {/* Gambar Produk + Sorting */}
        <div id="product" className="w-[1120px] ml-0 h-full p-4">
          {/* Sort By */}
          <div className="relative rounded-[20px] w-48 mr-[77px] mt-16 ml-auto">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="w-full p-2 bg-white border border-gray-300 rounded-md flex justify-between items-center"
            >
              {selectedSort}
              <FaAngleDown className="w-4 h-4 text-gray-500" />
            </button>

            {isSortOpen && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
                {sortOptions.map((option) => (
                  <p
                    key={option}
                    className="p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSelectedSort(option);
                      setIsSortOpen(false);
                    }}
                  >
                    {option}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Produk akan ditampilkan di sini */}
          <div className="mt-4 h-auto flex flex-wrap justify-center items-center gap-16">
            <div id="card-produk" className="w-[250px] h-[330px] border-slate-300 border-2 shadow-lg border-opacity-75 rounded-xl">
                <img src={desainTaman1} alt="desainTaman1" className="w-[250px] h-[175px] rounded-xl"/>
                <p id="nama-tanaman" className="text-[#404041] font-semibold text-base mt-2">Marble Queen</p>
                <p id="harga-tanaman" className="text-[#404041] mt-2">Rp.20.000</p>
                <a className=" block w-full py-1 bg-primary text-white py-2 rounded-xl text-center font-semibold text-lg mt-4" href="#">Beli</a>
            </div>
            <div id="card-produk" className="w-[250px] h-[330px] border-slate-300 border-2 shadow-lg border-opacity-75 rounded-xl">
                <img src={desainTaman2} alt="desainTaman2" className="w-[250px] h-[175px]"/>
                <p id="nama-tanaman" className="text-[#404041] font-semibold text-base mt-2">Neon Pothos</p>
                <p id="harga-tanaman" className="text-[#404041] mt-2">Rp.30.000</p>
                <a className=" block w-full py-1 bg-primary text-white py-2 rounded-xl text-center font-semibold text-lg mt-4" href="#">Beli</a>
            </div>
            <div id="card-produk" className="w-[250px] h-[330px] border-slate-300 border-2 shadow-lg border-opacity-75 rounded-xl">
                <img src={desainTaman3} alt="desainTaman3" className="w-[250px] h-[175px]"/>
                <p id="nama-tanaman" className="text-[#404041] font-semibold text-base mt-2">Syngonium Rayii</p>
                <p id="harga-tanaman" className="text-[#404041] mt-2">Rp.25.000</p>
                <a className=" block w-full py-1 bg-primary text-white py-2 rounded-xl text-center font-semibold text-lg mt-4" href="#">Beli</a>
            </div>
            <div id="card-produk" className="w-[250px] h-[330px] border-slate-300 border-2 shadow-lg border-opacity-75 rounded-xl">
                <img src={desainTaman4} alt="desainTaman4" className="w-[250px] h-[175px]"/>
                <p id="nama-tanaman" className="text-[#404041] font-semibold text-base mt-2">Pineapple</p>
                <p id="harga-tanaman" className="text-[#404041] mt-2">Rp.20.000</p>
                <a className=" block w-full py-1 bg-primary text-white py-2 rounded-xl text-center font-semibold text-lg mt-4" href="#">Beli</a>
            </div>
            <div id="card-produk" className="w-[250px] h-[330px] border-slate-300 border-2 shadow-lg border-opacity-75 rounded-xl">
                <img src={desainTaman5} alt="desainTaman5" className="w-[250px] h-[175px]"/>
                <p id="nama-tanaman" className="text-[#404041] font-semibold text-base mt-2">African Milk Tree</p>
                <p id="harga-tanaman" className="text-[#404041] mt-2">Rp.20.000</p>
                <a className=" block w-full py-1 bg-primary text-white py-2 rounded-xl text-center font-semibold text-lg mt-4" href="#">Beli</a>
            </div>
            <div id="card-produk" className="w-[250px] h-[330px] border-slate-300 border-2 shadow-lg border-opacity-75 rounded-xl">
                <img src={desainTaman6} alt="desainTaman6" className="w-[250px] h-[175px]"/>
                <p id="nama-tanaman" className="text-[#404041] font-semibold text-base mt-2">Pothos</p>
                <p id="harga-tanaman" className="text-[#404041] mt-2">Rp.40.000</p>
                <a className=" block w-full py-1 bg-primary text-white py-2 rounded-xl text-center font-semibold text-lg mt-4" href="#">Beli</a>
            </div>
            <div id="card-produk" className="w-[250px] h-[330px] border-slate-300 border-2 shadow-lg border-opacity-75 rounded-xl">
                <img src={desainTaman7} alt="desainTaman7" className="w-[250px] h-[175px]"/>
                <p id="nama-tanaman" className="text-[#404041] font-semibold text-base mt-2">Chinese Evergreen</p>
                <p id="harga-tanaman" className="text-[#404041] mt-2">Rp.75.000</p>
                <a className=" block w-full py-1 bg-primary text-white py-2 rounded-xl text-center font-semibold text-lg mt-4" href="#">Beli</a>
            </div>
            <div id="card-produk" className="w-[250px] h-[330px] border-slate-300 border-2 shadow-lg border-opacity-75 rounded-xl">
                <img src={desainTaman8} alt="desainTaman8" className="w-[250px] h-[175px]"/>
                <p id="nama-tanaman" className="text-[#404041] font-semibold text-base mt-2">Syngonium Rayii</p>
                <p id="harga-tanaman" className="text-[#404041] mt-2">Rp.15.000</p>
                <a className=" block w-full py-1 bg-primary text-white py-2 rounded-xl text-center font-semibold text-lg mt-4" href="#">Beli</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesainTaman;
