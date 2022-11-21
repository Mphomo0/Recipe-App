import bgImage from '../images/background.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex items-center justify-center w-auto h-screen' style={{ backgroundImage: `url(${bgImage})`}} >
      <div className='flex items-center justify-center text-4xl text-white drop-shadow-2xl'>
        <h1 className='text-center'>Looking for your favourite recipe?</h1>
      </div>
      <div>
        <Link to={'/recipes'}>
        <button className="home_btn .home_btn_mobile btn btn-outline btn-secondary text-white align-center lg:mt-[115px] lg:m-[-319px] sm:mt-[146px] sm:m-[-229px]">View Recipes
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
