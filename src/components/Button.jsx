import React from 'react'

const Button = ({color, size, text, borderRadius, bgColor, siize}) => {
  return (
    <button
      type='button'
      style={{backgroundColor: bgColor, color, borderRadius}}
      className={`text-${siize} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button