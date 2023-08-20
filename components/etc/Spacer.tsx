import React from 'react'

interface SpacerProps {
    title: string
}
const Spacer = (props: string) => {
    return (
        <>
            <div className='mt-5'>
                
                <hr className="w-full h-1 mx-auto bg-gray-400 border-0 rounded md:my-2" />
                <p className="text-4xl font-extrabold text-indigo-500">{props.title}</p>
            </div>
        </>
    )
}

export default Spacer
