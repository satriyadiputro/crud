"use client";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setActiveDot(currentSlide);
  }, [currentSlide]);

  return (
    <div className="container max-w-full flex flex-wrap">
      <div className="w-full md:w-1/2 h-auto">
        <div className="relative overflow-hidden w-full">
          <img
            className="max-w-full object-cover"
            src={slides[currentSlide].imgUrl}
            alt=""
          />

          <div className="overlay absolute bottom-0 left-0 p-3">
            <div className="mb-2">
              <a
                className="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-blue-500 text-white hover:bg-blue-600 uppercase font-weight-semi-bold p-2 mr-2"
                href=""
              >
                {slides[currentSlide].category}
              </a>
              <a className="text-white" href="">
                {slides[currentSlide].date}
              </a>
            </div>
            <a className="h2 m-0 text-white uppercase font-bold" href="">
              {slides[currentSlide].title}
            </a>
          </div>

          <div className="flex justify-end absolute top-0 right-0 mt-4 mr-4">
            {slides.map((slide, index) => (
              <button
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === activeDot ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>


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
  );
};

export default HeroSection;
