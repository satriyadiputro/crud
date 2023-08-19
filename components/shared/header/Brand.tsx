import React from 'react'

const Brand = (props:any) => {
    const { first, last } = props.data
  return (
    <a href="/" className="flex items-center">
        <h1 className="m-0 text-4xl text-white font-bold">{first}<span className="text-black font-semibold">{last}</span></h1>
    </a>
  )
}

export default Brand