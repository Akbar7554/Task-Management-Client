import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#614385] to-[#516395] flex flex-col h-screen">
      <header className="flex-grow flex flex-col justify-center items-center px-8">
        <h1 className="text-5xl font-bold text-white text-center mb-8">
          Welcome to Task Management Platform
        </h1>
        <p className="text-white text-lg text-center mb-12">
          Before you start your day, make sure to prioritize your tasks based on
          their urgency and importance.
        </p>
        <Link
          to="/login"
          className="flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-lg font-bold bg-[#00CDAC] text-white leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1"
        >
          Let’s Explore
          <span className="ml-2 mt-1">
            <FaArrowRight className="text-xl"></FaArrowRight>
          </span>
        </Link>
      </header>
    </div>
  )
}

export default Banner
