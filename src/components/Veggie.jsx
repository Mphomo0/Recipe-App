import { useEffect, useState } from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

const Veggie = () => {
    const [veggie, setVeggie] = useState([])

    useEffect(() => {
        getVeggie();
    },[])

    const getVeggie = async () => {
        const checkStorage = localStorage.getItem('veggie')

        if(checkStorage){
            setVeggie(JSON.parse((checkStorage)))
        }else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json()

            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            setVeggie(data.recipes)
            console.log(data.recipes)

        }      
    }
    
  return (

    <>
        <div className="flex-col items-center py-5 mt-0 text-3xl bg-gray-700 lg:flex">
            <h1 className="text-center text-white">Our Veggie Recipes</h1>
        </div>
        
        <div className="items-center px-4 py-10 bg-gray-700 lg:flex justify-content-center">
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
                perPage: 5,
            
            },
            },
            updateOnMove : true,
        }}>
           {veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
          <div  className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={'/recipe/' + recipe.id}>
                <img className="text-center rounded-t-lg" src={recipe.image} alt={recipe.title} />
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

export default Veggie
