import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className='lg:flex items-center justify-center mt-10 mb-10 bg[#2a303c] sm:flex-cols-4'>
      <Link to={'/cuisine/Italian'}>
     <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-blue-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 sm:text-xs">
      <FaPizzaSlice /> &nbsp;&nbsp;Italian
     </button>
     </Link>
     <Link to={'/cuisine/American'}>
     <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-blue-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 sm:text-xs">
      <FaHamburger /> &nbsp;&nbsp;American
     </button>
     </Link>
     <Link to={'/cuisine/Thai'}>
     <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-blue-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 sm:text-xs">
      <GiNoodles /> &nbsp;&nbsp;Thai
     </button>
     </Link>
     <Link to={'/cuisine/Japanese'}>
     <button type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-blue-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2 sm:text-xs">
      <GiChopsticks /> &nbsp;&nbsp;Japanese
     </button>
     </Link>
    </div>
  )
}

export default Category
