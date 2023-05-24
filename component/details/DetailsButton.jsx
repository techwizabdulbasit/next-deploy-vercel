import React from 'react'

const DetailsButton = ({name , onClick}) => {
  return (
    <button onClick={onClick} className="font-semibold transition-all my-5 hover:font-medium text-sm py-2 px-4 rounded-full hover:text-white bg-white hover:bg-[#2F5F82] border-2 border-[#2F5F82] text-[#2F5F82]">
    {name}
  </button>
  )
}

export default DetailsButton
