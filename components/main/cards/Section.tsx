import React from 'react'

const Section = (props:string) => {
  return (
    <div className="bg-white border border-solid border-gray-300 p-4 flex items-center justify-between border-l-4 border-secondary">
            <h4 className="m-0 uppercase text-xl font-bold">{props.name}</h4>
            <div className="flex items-center ml-auto">
                <a href="/">View All</a>
            </div>
        </div>
  )
}
export default Section