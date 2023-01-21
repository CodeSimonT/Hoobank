import React from 'react'

function Button(props) {
  return (
    <div className={`flex justify-center items-center bg-blue-gradient rounded-[10px]
     cursor-pointer py-3 px-6 font-poppins font-normal outline-none ${props.style}`}
    >Get Started</div>
  )
}

export default Button