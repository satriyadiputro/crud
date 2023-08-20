import Image from "next/image";
import React from "react";

const MiniCardLeaderBoard = () => {
    return (
        <>
            <div className="shadow-md rounded-lg mt-5">
                <Image
                    src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    className="rounded-t-lg w-full h-48 lg:h-auto "
                    width={375}
                    height={250}
                    alt=""
                />
                <div className="px-5">
                    <div className="flex justify-between items-center pt-3">
                        <span className="font-semibold text-sm">May 20th 2020</span>
                        <a className="px-2 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Design</a>
                    </div>
                    <h1 className="text-indigo-500 font-bold text-xl mb-2">
                    Can coffee make you a better developer?
                    </h1>
                    
                    <p className="text-gray-700 mb-5">
                        MiniCardLeaderBoard, that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using Lorem Ipsum is that....
                    </p>
                    <div className="flex justify-between flex-row-reverse">
                        <span className="mb-2 text-gray-800 font-bold">Read more</span>
                    </div>
                    <div className="flex flex-wrap py-5">
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">#online</span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">#blog</span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">#menulis</span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">#copywriting</span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">#wordpress</span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">#seo</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MiniCardLeaderBoard;
