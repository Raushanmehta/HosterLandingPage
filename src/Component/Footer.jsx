import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row justify-between items-center'>
      <ul className='flex gap-4  text-gray-400'>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div className='px-2'>
          <p className='font-bold font-playfair'>Have any question?</p>
          <a href="#" className='font-bold'>Talk to Specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer