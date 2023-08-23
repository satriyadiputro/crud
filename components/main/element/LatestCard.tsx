import React from 'react';
import Image from 'next/image';
import featuredImage from '@/public/news-700x435-1.jpg';

const LatestCard = () => {
  return (
    <div className="col-lg-6">
      <div className="relative mb-3">
        <div className="bg-white border border-t-0 p-4">
          <div className="mb-2">
            <a className="badge bg-primary text-uppercase font-semibold p-2 mr-2" href="">
              Business
            </a>
            <a className="text-body" href="">
              <small>Jan 01, 2045</small>
            </a>
          </div>
          <a className="text-secondary text-uppercase font-semibold" href="">
            Lorem ipsum dolor sit amet elit...
          </a>
        </div>
        <div className="flex justify-between bg-white border border-t-0 p-4">
          <div className="flex items-center">
            <small>John Doe</small>
          </div>
          <div className="flex items-center">
            <small className="ml-3">
              <i className="far fa-eye mr-2"></i>12345
            </small>
            <small className="ml-3">
              <i className="far fa-comment mr-2"></i>123
            </small>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src={featuredImage}
            layout="fill"
            objectFit="cover"
            alt="Featured Image"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestCard;