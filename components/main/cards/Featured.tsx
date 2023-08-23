import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

const Featured = () => {
    const slides = [
        {
            imgUrl: "https://dummyimage.com/800x500/000/fff",
            category: "Business",
            date: "Jan 01, 2045",
            title: "Strategi Sukses dalam Bisnis: Panduan Terbaik untuk Meraih Kesuksesan",
        },
        {
            imgUrl: "https://dummyimage.com/800x500/000/fff",
            category: "Education",
            date: "Jan 02, 2045",
            title: "Panduan Memulai Bisnis Anda Sendiri: Langkah demi Langkah Menuju Keberhasilan",
        },
        {
            imgUrl: "https://dummyimage.com/800x500/000/fff",
            category: "Finance",
            date: "Jan 03, 2045",
            title: "Tren Bisnis Terkini: Peluang dan Tantangan di Era Digital",
        },
        {
            imgUrl: "https://dummyimage.com/800x500/000/fff",
            category: "Tips & Trick",
            date: "Jan 04, 2045",
            title: "Manajemen Keuangan yang Efektif: Tips dan Trik untuk Meningkatkan Profitabilitas Bisnis Anda",
        },
    ];

    return (
    <>
        <div className="bg-white border border-solid border-gray-300 p-2 flex items-center justify-between border-l-4 border-secondary">
            <h4 className="m-0 uppercase text-xl font-bold">Featured News</h4>
            <div className="flex items-center ml-auto">
                <RiArrowLeftSLine size={50} className="mr-2" />
                <RiArrowRightSLine size={50} />
            </div>
        </div>
        <div>
        <div className="w-full md:h-1/4 md:w-1/2 grid grid-cols-1 md:grid-cols-2 flex flex-wrap h-auto">
    {slides.map((slide, index) => (
        <div key={index} className="relative">
        <img className="h-auto" src={slide.imgUrl} alt="" />
        <div className="overlay absolute bottom-0 left-0 p-3">
            <div className="mb-2">
            <a
                className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-blue-500 text-white hover:bg-blue-600 uppercase font-weight-semi-bold p-2 mr-2"
                href=""
            >
                {slide.category}
            </a>
            <a className="text-white" href="">
                {slide.date}
            </a>
            </div>
            <a
            className="h2 m-0 text-white uppercase font-bold"
            href=""
            >
            {slide.title}
            </a>
        </div>
        </div>
    ))}
    </div>
        </div>
    </>
  );
};

export default Featured;