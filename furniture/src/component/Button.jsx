import React from 'react'
// children is name like text of button 
function Button({
    children,
    type="button",
    bgColor = 'bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) {
  return <button className={`px-4  rounded-lg ${className}${textColor} ${bgColor}`} {...props} 
  >{children}
  </button>
}

export default Button