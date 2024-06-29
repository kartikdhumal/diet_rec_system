import React from 'react'
import { Link } from 'react-router-dom'
import diet from '../images/diet.png'

function Home() {
  return (
    <div clas>
      <div className="bg-blue-100">
        <nav className="p-4">
          <div className="container flex justify-between items-center">
            <div className="text-green-500 text-3xl font-bold">
              E-Dietician
            </div>
            <div className="flex space-x-4">
              <Link to="/prefence" className="text-black mr-2 uppercase font-bold  hover:text-blue-700">
                Your Plan
              </Link>
              <Link to="/BMI" className="text-black  uppercase font-bold mr-2 hover:text-blue-700">
                BMI Calculator
              </Link>
              <Link to="/allitem" className="text-black uppercase font-bold  mr-2 hover:text-blue-700">
                All Recipes
              </Link>
              <Link to="/profile" className="text-black uppercase font-bold mr-2 hover:text-blue-700">
                Profile
              </Link>
              <Link to="/Login" className="text-black uppercase font-bold mr-6 hover:text-blue-700">
                Login/Register
              </Link>
            </div>
          </div>
        </nav>
        <div className="text-center">
          <h1 className="text-4xl font-bold pt-10">
            ACHIEVE YOUR GOALS WITH A <span className="text-green-500">HEALTHY DIET!</span>
          </h1>
          <div className="space-x-4 pt-10 pb-10">
            <Link to={'/prefence'} className="bg-green-500 text-white py-2 px-4 rounded">Your Plan</Link>
            <Link to={'/allitem'} className="border border-black text-black py-2 px-4 rounded">All Food Items</Link>
          </div>
        </div>
        <div className="relative">
          <div className='flex items-center w-full justify-center' >
            <img src={diet} alt="Blending greens" className="w-[75%] rounded-lg grayscale-0 h-[50%] object-cover" />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
