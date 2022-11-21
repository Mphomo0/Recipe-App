import { useEffect, useState } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom'

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular();
    },[])

    const getPopular = async () => {
        const checkStorage = localStorage.getItem('popular')

        if(checkStorage){
            setPopular(JSON.parse((checkStorage)))
        }else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json()

            localStorage.setItem('popular', JSON.stringify(data.recipes))
            setPopular(data.recipes) 

        }      
    }
    
  return (

    <>
        <div className="flex-col items-center py-5 mt-0 text-3xl bg[#2a303c] lg:flex sm:items-center">
            <h1 className="text-center text-white">Our Popular Recipes</h1>
        </div>
        
        <div className="items-center px-4 py-10 bg[#2a303c] lg:flex justify-content-center">
          <Splide options={{
            gap: '1rem',
            breakpoints: {
            640: {
                perPage: 1,
        
            },
            768: {
                perPage: 2,
            
            },
            1024: {
                perPage: 3,
            
            },
            1440: {
                perPage: 4,
            
            },
            },
            updateOnMove : true,
        }}>
           {popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={'/recipe/' + recipe.id}>
                <img className="rounded-t-lg" src={recipe.image} alt={recipe.title} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{recipe.title}</h5>
            </div>
            </Link>
          </div>
          </SplideSlide>
          ))}
          </Splide>
        </div>
            
    </>
  )
}

export default Popular
