import Search from '../components/Search'
import Category from '../components/Category'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json()
        setCuisine(recipes.results)

    }

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type])

  return (
    <>
      <Search />
      <Category />
         <div className="grid-cols-4 gap-4 px-4 py-10 bg[#2a303c] lg:grid ">
        {cuisine.map((recipe) => (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={recipe.id}>
           <Link to={'/recipe/' + recipe.id}>
                <img className="w-full rounded-t-lg" src={recipe.image} alt={recipe.title} />
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-white">{recipe.title}</h5>
            </div>
            </Link>
        </div>
        ))}
        </div>
    </>

    
  )
}

export default Cuisine
