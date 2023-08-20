import Link from 'next/link';
import React from 'react';

const PostsCardHorizontal = () => {
    return (
        <div className="mt-5 lg:flex bg-white rounded-lg shadow-md">
            <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l-lg text-center overflow-hidden"
            style={{backgroundImage: 'url("https://tailwindcss.com/img/card-left.jpg")'}}
            title="Woman holding a mug">

            </div>
            <div className="shadow-xl bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-5">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm">May 20th 2020</span>
                        <a className="px-2 pb-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Design</a>
                    </div>
                    
                    <Link href='/' className="text-indigo-500 font-bold text-xl">Can coffee make you a better developer?</Link>
                    <p className="text-gray-700 text-base"> PostsCardHorizontal, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
                <div className="flex justify-between flex-row-reverse pb-5">
                    <span className="mb-2 text-gray-800 font-bold">Read more</span>
                </div>
                
                <div className="flex flex-wrap">
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">#online</span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">#blog</span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">#menulis</span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">#copywriting</span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">#wordpress</span>
                    <span className="m-1 px-2 py-1 rounded bg-indigo-500">#seo</span>
            </div>
            </div>
        </div>
    );
};

export default PostsCardHorizontal;
