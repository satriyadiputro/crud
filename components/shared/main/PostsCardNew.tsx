import Link from 'next/link';
import React from 'react';

const PostsCardNew = () => {
  return (
    <>
        <div className="flex flex-wrap place-items-center h-screen">
        <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 w-60 md:w-80 m-auto">

            <img alt="blog photo" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" className="max-h-40 w-full object-cover" />
            <div className="bg-white w-full p-4">
                <Link href="#" className="text-indigo-500 text-2xl font-medium">Should You Get Online Education?</Link>

                <p className="text-gray-600 font-light text-md">
                It is difficult to believe that we have become so used to having instant access to information at...
                <Link href="#" className="inline-flex text-indigo-500">Read More</Link>
                </p>
                <div className="flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-white font-medium">
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">#online</span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">#internet</span>
                <span className="m-1 px-2 py-1 rounded bg-indigo-500">#education</span>
                </div>
            </div>

        </div>
        </div>
    </>
  );
};

export default PostsCardNew;
