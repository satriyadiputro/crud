import Link from 'next/link';

const PostsCardHorizontalMini = () => {
  return (
    <div className="mt-5 lg:flex bg-white rounded-lg shadow-md mx-3">
      <div
        className="h-48 md:h-auto md:w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l-lg text-center overflow-hidden"
        style={{ backgroundImage: 'url("https://tailwindcss.com/img/card-left.jpg")' }}
        title="Woman holding a mug"
      ></div>
      <div className="shadow-xl bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div>
                    
          <Link href='/' className="text-indigo-500 font-bold text-base">Can coffee make you a better developer?</Link>
          <p className="text-gray-700 text-sm">PostsCardHorizontal, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
      </div>
    </div>
  );
};

export default PostsCardHorizontalMini;
