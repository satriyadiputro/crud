import Image from "next/image";
import React from "react";

const CardPost1 = () => {
    return (
       
        <div className="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
            <Image alt="a" className="aspect-video w-96 rounded-t-2xl object-cover object-center"
            src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="p-4">
            <small className="text-blue-400 text-xs">Automobile company</small>
            <h1 className="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
            <p className="text-sm tracking-tight font-light text-slate-400 leading-6">
                Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan.
            </p>
            </div>
        </div>

    );
};

export default CardPost1;
