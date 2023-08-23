import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaGooglePlusG, FaYoutube } from 'react-icons/fa';
import ads from '@/public/ads.png'
import Image from 'next/image';

const TopHeader = () => {
    const today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = today.toLocaleString('en-US', options);


    return (
        <div className="container-fluid hidden lg:block bg-primary">
            <div className="bg-dark px-5">
                <div className="flex justify-between">
                <nav>
                    <ul className="flex space-x-2">
                    <li className="border-r border-secondary">
                        <a href="#" className="text-white text-sm px-2">{formattedDate}</a>
                    </li>
                    <li className="border-r border-secondary">
                        <a href="#" className="text-white text-sm px-2">About Us</a>
                    </li>
                    <li className="border-r border-secondary">
                        <a href="#" className="text-white text-sm px-2">Contact</a>
                    </li>
                    <li>
                        <a href="#" className="text-white text-sm px-2">Privacy Policy</a>
                    </li>
                    </ul>
                </nav>
                <nav>
                    <ul className="flex gap-1 mt-1">
                    <li>
                        <a href="#"><FaTwitter className="text-white" /></a>
                    </li>
                    <li>
                        <a href="#"><FaFacebookF className="text-white" /></a>
                    </li>
                    <li>
                        <a href="#"><FaLinkedinIn className="text-white" /></a>
                    </li>
                    <li>
                        <a href="#"><FaInstagram className="text-white" /></a>
                    </li>
                    <li>
                        <a href="#"><FaGooglePlusG className="text-white" /></a>
                    </li>
                    <li>
                        <a href="#"><FaYoutube className="text-white" /></a>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            <div className="flex justify-between items-center bg-white py-3 px-10">
                <div className="p-0 hidden lg:block">
                    <a href="/" className="m-0 text-4xl font-extrabold text-uppercase text-primary">
                    Aing<span className="text-secondary font-medium">News</span>
                    </a>
                </div>
            <div>
            <a href="https://htmlcodex.com">
                <Image className="max-w-full" width={728} height={90} src={ads} alt="" />
            </a>
            </div>
        </div>
    </div>
    );
};

export default TopHeader;
